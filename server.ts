import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import Stripe from "stripe";
import { google } from "googleapis";
import dotenv from "dotenv";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import compression from "compression";

dotenv.config();

// Global catch-all logging for fatal errors
process.on('uncaughtException', (err) => {
  console.error(`[FATAL] Uncaught Exception: ${err.message}\n${err.stack}`);
});

process.on('unhandledRejection', (reason) => {
  console.error(`[FATAL] Unhandled Rejection: ${reason}`);
});

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const distPath = path.join(__dirname, "dist");
  const isDev = process.env.NODE_ENV !== "production";

  console.log(`[BOOT] Initializing server in ${process.env.NODE_ENV || 'production'} mode`);

  // Initialize Firebase Admin lazily inside startServer
  let db: any = null;
  try {
    const configPath = path.join(process.cwd(), "firebase-applet-config.json");
    if (!fs.existsSync(configPath)) {
      console.error("[BOOT] CRITICAL: firebase-applet-config.json MISSING!");
    } else {
      const firebaseConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));
      let adminApp;
      adminApp = admin.apps.find(app => app?.name === 'acalme_se_app');
      if (!adminApp) {
        adminApp = admin.initializeApp({
          projectId: firebaseConfig.projectId,
        }, 'acalme_se_app');
      }
      db = getFirestore(adminApp, firebaseConfig.firestoreDatabaseId);
      console.log("[BOOT] Firebase Admin connected");
    }
  } catch (e: any) {
    console.error("[BOOT] Firebase Admin initialization error:", e.message);
  }

  const TOKENS_PATH = process.env.NODE_ENV === "production" ? "/tmp/google_tokens.json" : path.join(process.cwd(), "google_tokens.json");

  const saveTokensLocally = (tokens: any) => {
    try {
      fs.writeFileSync(TOKENS_PATH, JSON.stringify(tokens));
    } catch (e) {
      console.error("Erro ao salvar tokens localmente:", e);
    }
  };

  const loadTokensLocally = () => {
    if (fs.existsSync(TOKENS_PATH)) {
      return JSON.parse(fs.readFileSync(TOKENS_PATH, "utf8"));
    }
    return null;
  };

  // Background Firestore health check
  if (db) {
    (async () => {
      try {
        await db.collection("config").doc("healthcheck").set({ 
          lastCheck: new Date().toISOString(),
          node_env: process.env.NODE_ENV 
        });
        console.log("[BOOT] Firestore healthcheck written");
      } catch (e: any) {
        console.error("[BOOT] Firestore healthcheck FAILED:", e.message);
      }
    })();
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI || (process.env.APP_URL ? `${process.env.APP_URL}/api/auth/google/callback` : '')
  );

  app.use(compression());
  app.use(express.json());

  // Native, lightweight CORS middleware
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
      res.setHeader("Access-Control-Allow-Credentials", "true");
    }
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  // Request logging middleware
  app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      if (req.url !== "/api/health" && !req.url.includes("/assets/")) {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
      }
    });
    next();
  });

  // API Health - Must be fast and reliable
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      time: new Date().toISOString(),
      mode: process.env.NODE_ENV || 'production',
      firebase: db ? "initialized" : "missing",
      env_check: {
        stripe: !!process.env.STRIPE_SECRET_KEY,
        google_client: !!process.env.GOOGLE_CLIENT_ID,
        app_url: !!process.env.APP_URL
      }
    });
  });

  // ROTA PARA DOWNLOAD DO ZIP DO DESENVOLVIMENTO NO CLOUDFLARE PAGES
  app.get("/dist-cloudflare.zip", (req, res) => {
    const zipPath = path.join(process.cwd(), "dist-cloudflare.zip");
    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=dist-cloudflare.zip");
    res.sendFile(zipPath, (err) => {
      if (err) {
        console.error("Erro ao enviar o ZIP:", err);
        res.status(404).send("<h1>Arquivo ZIP ainda nao gerado ou nao encontrado</h1><p>Aguarde um instante ou rode o comando de build para gerar.</p>");
      }
    });
  });

  // Explicit check for APP_URL to avoid malformed links
  const appUrl = process.env.APP_URL || '';
  if (!appUrl && !isDev) {
    console.warn("[WARN] APP_URL not set. Redirects and Stripe might not work correctly.");
  }

  // google search console
  app.get("/google37375635affddf3f.html", (req, res) => {
    res.send("google-site-verification: google37375635affddf3f");
  });

  // Sitemap e Robots.txt
  app.get(["/sitemap.xml", "/robots.txt"], (req, res) => {
    const fileName = req.path.substring(1);
    const loc = path.join(distPath, fileName);
    if (fs.existsSync(loc)) {
      res.set('Cache-Control', 'public, max-age=3600');
      return res.sendFile(loc);
    }
    const publicLoc = path.join(process.cwd(), "public", fileName);
    if (fs.existsSync(publicLoc)) {
      return res.sendFile(publicLoc);
    }
    res.status(404).send("Not found");
  });

  // API routes
  app.get("/api/auth/google/url", (req, res) => {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/calendar.events"],
      prompt: "consent"
    });
    res.json({ url });
  });

  app.get("/api/auth/google/callback", async (req, res) => {
    const { code, error } = req.query;
    if (error) return res.redirect(`${process.env.FRONTEND_URL || process.env.APP_URL || ''}/admin?error=${error}`);

    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      saveTokensLocally(tokens);
      
      // Save to Firebase too for persistence across deploys
      await db.collection("settings").doc("google_calendar_v2").set({
        tokens,
        updatedAt: new Date().toISOString()
      });

      res.send(`
        <html>
          <body style="font-family: sans-serif; text-align: center; padding: 50px; background: #fdfcfb;">
            <div style="max-width: 500px; margin: 0 auto; padding: 40px; background: white; border-radius: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
              <h1 style="color: #4CAF50;">Agenda Conectada!</h1>
              <p>O Google Agenda foi integrado com sucesso.</p>
              <script>
                if (window.opener) window.opener.postMessage({ type: 'GOOGLE_AUTH_SUCCESS' }, '*');
                setTimeout(() => window.close(), 2000);
              </script>
            </div>
          </body>
        </html>
      `);
    } catch (e: any) {
      res.status(500).send(`Erro na autenticação: ${e.message}`);
    }
  });

  app.get("/api/auth/google/status", async (req, res) => {
    try {
      const localTokens = loadTokensLocally();
      if (localTokens) return res.json({ connected: true });
      
      const doc = await db.collection("settings").doc("google_calendar_v2").get();
      res.json({ connected: doc.exists });
    } catch (error) {
      res.status(500).json({ error: "Erro ao verificar status" });
    }
  });

  app.post("/api/create-checkout-session", async (req, res) => {
    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ error: "Stripe key missing" });
    }
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const { name, phone, date, time } = req.body;
      const origin = req.headers.origin || process.env.FRONTEND_URL || process.env.APP_URL || "";
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "pix"],
        line_items: [{
          price_data: {
            currency: "brl",
            product_data: { 
              name: "Consulta Psicanalítica - Dr. Reginaldo Vêntola", 
              description: `Sessão para ${date} às ${time}` 
            },
            unit_amount: 15000,
          },
          quantity: 1,
        }],
        mode: "payment",
        success_url: `${origin}/agendar?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/agendar?canceled=true`,
        metadata: { name, phone, date, time },
      });
      res.json({ url: session.url });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/confirm-payment", async (req, res) => {
    const { session_id } = req.body;
    if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error: "Stripe missing" });

    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const session = await stripe.checkout.sessions.retrieve(session_id);
      
      if (session.payment_status === 'paid') {
        const { name, phone, date, time } = session.metadata || {};
        
        // 1. Persist to Firestore
        const appointmentRef = await db.collection("appointments").add({
          name, phone, dateTime: `${date}T${time}:00`,
          status: 'confirmed',
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          stripeSessionId: session_id
        });

        // 2. Google Calendar Event
        let tokens = loadTokensLocally();
        if (!tokens) {
          const configDoc = await db.collection("settings").doc("google_calendar_v2").get();
          tokens = configDoc.data()?.tokens;
        }

        if (tokens) {
          oauth2Client.setCredentials(tokens);
          const calendar = google.calendar({ version: "v3", auth: oauth2Client });
          const start = new Date(`${date}T${time}:00`);
          const end = new Date(start.getTime() + 60 * 60 * 1000);

          await calendar.events.insert({
            calendarId: "primary",
            requestBody: {
              summary: `Consulta: ${name}`,
              description: `Paciente: ${name}\nWhatsApp: ${phone}`,
              start: { dateTime: start.toISOString() },
              end: { dateTime: end.toISOString() },
            },
          });
        }
        res.json({ success: true, appointmentId: appointmentRef.id });
      } else {
        res.status(400).json({ error: "Pagamento não confirmado" });
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // Vite setup or Static serving
  if (isDev) {
    console.log("[BOOT] Loading Vite for development...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    
    app.get("*", async (req, res, next) => {
      if (req.url.startsWith("/api/")) return next();
      try {
        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.url, template);
        res.status(200).set({ "Content-Type": "text/html", "Cache-Control": "no-cache" }).end(template);
      } catch (e) {
        next(e);
      }
    });
  } else {
    console.log("[BOOT] Serving static files from dist");
    if (fs.existsSync(distPath)) {
      // Improved caching for static assets
      app.use(express.static(distPath, { 
        maxAge: '1y', 
        index: false,
        immutable: true,
        setHeaders: (res, path) => {
          if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
          } else {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
        }
      }));

      app.get("*", (req, res) => {
        if (req.url.startsWith("/api/")) return res.status(404).json({ error: "API route not found" });
        // Set no-cache for index.html to ensure updates are picked up but use ETag for validation
        res.setHeader('Cache-Control', 'no-cache');
        res.sendFile(path.join(distPath, "index.html"));
      });
    } else {
      console.error("[CRITICAL] dist directory missing!");
      app.get("*", (req, res) => res.status(500).send("Application not built correctly"));
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[BOOT] Listening on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error("[CRITICAL] Startup failed:", err);
  process.exit(1);
});
