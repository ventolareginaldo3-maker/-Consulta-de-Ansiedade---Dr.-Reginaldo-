import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import Stripe from "stripe";
import { google } from "googleapis";
import dotenv from "dotenv";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

dotenv.config();

// Initialize Firebase Admin
const firebaseConfig = JSON.parse(fs.readFileSync(path.join(process.cwd(), "firebase-applet-config.json"), "utf8"));

// Inicialização com Nome Exclusivo para evitar conflitos de Projeto
const adminApp = admin.initializeApp({
  projectId: firebaseConfig.projectId,
}, 'acalme_se_app');

const db = getFirestore(adminApp, firebaseConfig.firestoreDatabaseId);

const TOKENS_PATH = path.join(process.cwd(), "google_tokens.json");

// Helper to save tokens locally
const saveTokensLocally = (tokens: any) => {
  fs.writeFileSync(TOKENS_PATH, JSON.stringify(tokens));
};

// Helper to load tokens locally
const loadTokensLocally = () => {
  if (fs.existsSync(TOKENS_PATH)) {
    return JSON.parse(fs.readFileSync(TOKENS_PATH, "utf8"));
  }
  return null;
};

// Test connection on startup
(async () => {
  try {
    console.log("Testando conexão com Firestore...");
    await db.collection("config").doc("healthcheck").set({ lastCheck: new Date().toISOString() });
    console.log("Conexão com Firestore OK!");
  } catch (e: any) {
    console.error("FALHA NA CONEXÃO COM FIRESTORE:", e.message);
  }
})();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI || `${process.env.APP_URL}/api/auth/google/callback`
);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Request logging middleware
  app.use((req, res, next) => {
    const start = Date.now();
    const host = req.get('host');
    res.on('finish', () => {
      const duration = Date.now() - start;
      const logMsg = `[REQUEST] ${new Date().toISOString()} ${req.method} ${req.url} HOST:${host} STATUS:${res.statusCode} ${duration}ms\n`;
      console.log(logMsg.trim());
      try {
        fs.appendFileSync(path.join(process.cwd(), "server_logs.txt"), logMsg);
      } catch (e) {
        // Ignore logging errors
      }
    });
    next();
  });

  // Google Search Console Verification File - Prioridade Máxima
  app.get("/google37375635affddf3f.html", (req, res) => {
    const filePath = path.join(process.cwd(), "google37375635affddf3f.html");
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.send("google-site-verification: google37375635affddf3f");
    }
  });

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", env: process.env.NODE_ENV });
  });

  // --- STRIPE INTEGRATION ---
  app.post("/api/create-checkout-session", async (req, res) => {
    console.log("[STRIPE] Iniciando criação de sessão...");
    
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("[STRIPE] Erro: STRIPE_SECRET_KEY não encontrada nos Secrets.");
      return res.status(500).json({ error: "Configuração de pagamento incompleta (Chave não encontrada)." });
    }

    const currentStripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { name, phone, date, time } = req.body;

    try {
      const session = await currentStripe.checkout.sessions.create({
        payment_method_types: ["card", "pix"],
        payment_method_options: {
          pix: {
            expires_after_seconds: 3600,
          },
        },
        line_items: [
          {
            price_data: {
              currency: "brl",
              product_data: {
                name: "Consulta Psicanalítica - Dr. Reginaldo Ventola",
                description: `Sessão agendada para ${date} às ${time}`,
              },
              unit_amount: 15000,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        // Ajuste para BrowserRouter: o sucesso deve voltar para /agendar
        success_url: `${process.env.APP_URL}/agendar?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL}/agendar?canceled=true`,
        metadata: {
          name,
          phone,
          date,
          time,
        },
      });

      console.log("[STRIPE] Sessão criada com sucesso:", session.id);
      res.json({ url: session.url });
    } catch (error: any) {
      console.error("[STRIPE] Erro ao criar sessão:", error.message);
      res.status(500).json({ error: error.message });
    }
  });

  // --- GOOGLE CALENDAR INTEGRATION ---
  app.get("/api/auth/google/url", (req, res) => {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/calendar.events"],
    });
    res.json({ url });
  });

  app.get("/api/auth/google/callback", async (req, res) => {
    const { code, error } = req.query;
    
    if (error) {
      console.error("Erro retornado pelo Google:", error);
      return res.status(400).send(`Erro do Google: ${error}`);
    }

    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      
      // Salvar tokens LOCALMENTE para evitar erros de permissão do Firestore
      try {
        saveTokensLocally(tokens);
        console.log("Tokens salvos localmente com sucesso");
      } catch (fileError: any) {
        console.error("ERRO AO SALVAR ARQUIVO DE TOKENS:", fileError);
        throw new Error(`Erro ao salvar credenciais: ${fileError.message}`);
      }

      res.send(`
        <html>
          <body style="font-family: sans-serif; text-align: center; padding: 50px; background: #fdfcfb; color: #433434;">
            <div style="max-width: 500px; margin: 0 auto; padding: 40px; background: white; border-radius: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
              <h1 style="color: #4CAF50; font-size: 32px; margin-bottom: 20px;">Agenda Conectada!</h1>
              <p style="font-size: 18px; line-height: 1.6;">Seu Google Agenda foi integrado com sucesso ao Método Acalme-se.</p>
              <p style="font-size: 14px; color: #888;">Esta janela será fechada em instantes...</p>
            </div>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'GOOGLE_AUTH_SUCCESS' }, '*');
              }
              setTimeout(() => window.close(), 3000);
            </script>
          </body>
        </html>
      `);
    } catch (error: any) {
      console.error("Erro ao autenticar com Google:", error);
      res.status(500).send(`
        <html>
          <body style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #f44336;">Erro de Autenticação</h1>
            <p>Não foi possível conectar com o Google.</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; font-family: monospace; margin-top: 20px; text-align: left; display: inline-block;">
              <strong>Detalhes do erro:</strong><br/>
              ${error.message || JSON.stringify(error)}
            </div>
            <br/><br/>
            <button onclick="window.close()" style="padding: 10px 20px; cursor: pointer;">Fechar Janela</button>
          </body>
        </html>
      `);
    }
  });

  app.get("/api/auth/google/status", async (req, res) => {
    try {
      const localTokens = loadTokensLocally();
      if (localTokens) {
        return res.json({ connected: true });
      }
      const doc = await db.collection("settings").doc("google_calendar_v2").get();
      if (doc.exists) {
        return res.json({ connected: true });
      }
      const oldDoc = await db.collection("config").doc("google_calendar").get();
      res.json({ connected: oldDoc.exists });
    } catch (error) {
      res.status(500).json({ error: "Erro ao verificar status" });
    }
  });

  // Endpoint para confirmar pagamento e criar evento na agenda
  app.post("/api/confirm-payment", async (req, res) => {
    const { session_id } = req.body;
    if (!stripe) return res.status(500).json({ error: "Stripe não configurado" });

    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      if (session.payment_status === 'paid') {
        const { name, phone, date, time } = session.metadata || {};
        
        // 1. Criar agendamento no Firestore
        const appointmentRef = await db.collection("appointments").add({
          name,
          phone,
          dateTime: `${date}T${time}:00`,
          status: 'confirmed',
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          stripeSessionId: session_id
        });

        // 2. Criar evento no Google Calendar
        let tokens = loadTokensLocally();
        
        if (!tokens) {
          const configDoc = await db.collection("settings").doc("google_calendar_v2").get();
          if (configDoc.exists) {
            tokens = configDoc.data()?.tokens;
          } else {
            // Fallback para o caminho antigo se existir
            const oldConfig = await db.collection("config").doc("google_calendar").get();
            if (oldConfig.exists) {
              tokens = oldConfig.data()?.tokens;
            }
          }
        }

        if (tokens) {
          oauth2Client.setCredentials(tokens);
          const calendar = google.calendar({ version: "v3", auth: oauth2Client });

          const startDateTime = new Date(`${date}T${time}:00`);
          const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hora de duração

          await calendar.events.insert({
            calendarId: "primary",
            requestBody: {
              summary: `Consulta: ${name}`,
              description: `Paciente: ${name}\nWhatsApp: ${phone}\nAgendado via Método Acalme-se`,
              start: { dateTime: startDateTime.toISOString() },
              end: { dateTime: endDateTime.toISOString() },
            },
          });
        }

        res.json({ success: true, appointmentId: appointmentRef.id });
      } else {
        res.status(400).json({ error: "Pagamento não confirmado" });
      }
    } catch (error: any) {
      console.error("Erro ao confirmar pagamento:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  const distPath = path.join(__dirname, "dist");
  const isDev = process.env.NODE_ENV !== "production" || !fs.existsSync(distPath);
  
  console.log(`[SERVER] Mode: ${isDev ? 'DEVELOPMENT' : 'PRODUCTION'}`);
  console.log(`[SERVER] Dist path: ${distPath}`);
  console.log(`[SERVER] Dist exists: ${fs.existsSync(distPath)}`);

  // Explicit routes for SPA paths to ensure they are handled correctly
  const spaPaths = [
    "/", 
    "/triagem", 
    "/agendar", 
    "/metodo-e-tratamento", 
    "/sobre", 
    "/contato", 
    "/blog", 
    "/ebooks", 
    "/depoimentos", 
    "/sintomas-de-ansiedade", 
    "/mente-ansiosa", 
    "/ansiedade-e-depressao", 
    "/ansiedade-sob-controle", 
    "/guia-de-resgate", 
    "/psiquiatra-ou-psicanalista",
    "/admin",
    "/confirmacao-plano",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/iridologia-e-naturopatia",
    "/ansiedade-em-mococa",
    "/especialista-ansiedade-mococa",
    "/adoecimento-silencioso"
  ];
  
  // Handle both with and without trailing slash
  const spaPathsWithTrailing = spaPaths.flatMap(p => p === "/" ? [p] : [p, `${p}/`]);

  app.get(spaPathsWithTrailing, async (req, res, next) => {
    console.log(`[SPA-ROUTE] Handling ${req.url}`);
    if (isDev) {
      try {
        const vite = req.app.get('vite');
        if (vite) {
          let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
          template = await vite.transformIndexHtml(req.url, template);
          return res.status(200).set({ "Content-Type": "text/html" }).end(template);
        } else {
          // If vite is not ready yet, just serve the raw file
          return res.sendFile(path.resolve(__dirname, "index.html"));
        }
      } catch (e) {
        console.error(`[SPA-ROUTE] Error in dev handler for ${req.url}:`, e);
        return next(e);
      }
    } else {
      return res.sendFile(path.join(distPath, "index.html"));
    }
  });

  // Vite middleware for development
  if (isDev) {
    console.log("Starting in DEVELOPMENT mode with Vite middleware");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.set('vite', vite); // Store vite instance for use in routes
    app.use(vite.middlewares);

    app.get("*", async (req, res, next) => {
      const url = req.originalUrl;
      console.log(`[CATCH-ALL] Requested URL: ${url}`);
      
      // Skip API routes
      if (url.startsWith("/api/")) {
        console.log(`[CATCH-ALL] Skipping API route: ${url}`);
        return next();
      }

      try {
        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e: any) {
        console.error(`[CATCH-ALL] Error transforming HTML for ${url}:`, e);
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    console.log("Starting in PRODUCTION mode");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    } else {
      console.error("DIST directory not found in production mode!");
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
