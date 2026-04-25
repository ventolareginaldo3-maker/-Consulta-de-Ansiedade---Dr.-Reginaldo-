
// Analytics and Tracking Service
// This service handles Facebook Pixel and Google Ads/Analytics events

export const analytics = {
  // Initialize tracking scripts
  init: () => {
    const fbId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
    const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    const clarityId = import.meta.env.VITE_CLARITY_ID;

    console.log('[Analytics] Initializing...', { 
      hasFB: !!fbId, 
      hasGA: !!gaId, 
      hasClarity: !!clarityId 
    });

    if (!fbId && !gaId && !clarityId) {
      console.warn('[Analytics] No tracking IDs found. Please set VITE_FACEBOOK_PIXEL_ID in Settings.');
    }

    if (fbId) {
      // Facebook Pixel Script
      try {
        const w = window as any;
        if(w.fbq) return;
        w.fbq = function(){
          w.fbq.callMethod ? w.fbq.callMethod.apply(w.fbq, arguments) : w.fbq.queue.push(arguments);
        };
        if(!w._fbq) w._fbq = w.fbq;
        w.fbq.push = w.fbq;
        w.fbq.loaded = !0;
        w.fbq.version = '2.0';
        w.fbq.queue = [];
        const t = document.createElement('script');
        t.async = !0;
        t.src = 'https://connect.facebook.net/en_US/fbevents.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode?.insertBefore(t, s);
        
        w.fbq('init', fbId);
        console.log('[Analytics] Facebook Pixel initialized');
      } catch (e) {
        console.error('[Analytics] FB Pixel Error:', e);
      }
    }

    if (gaId) {
      // Google Analytics Script
      try {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);

        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]){(window as any).dataLayer.push(arguments);}
        (window as any).gtag = gtag;
        gtag('js', new Date());
        gtag('config', gaId, { send_page_view: false });
        console.log('[Analytics] Google Analytics initialized');
      } catch (e) {
        console.error('[Analytics] GA Error:', e);
      }
    }

    if (clarityId) {
      // Microsoft Clarity Script
      try {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `;
        document.head.appendChild(script);
        console.log('[Analytics] Microsoft Clarity initialized');
      } catch (e) {
        console.error('[Analytics] Clarity Error:', e);
      }
    }
  },

  // Track specific events
  trackEvent: (eventName: string, params?: object) => {
    const fbId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
    const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

    if (fbId && (window as any).fbq) {
      // Map GA4 'page_view' to Facebook 'PageView'
      const fbEventName = eventName === 'page_view' ? 'PageView' : eventName;
      (window as any).fbq('track', fbEventName, params);
    }

    if (gaId && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
    
    console.log(`[Analytics] Event: ${eventName}`, params);
  },

  // Specialized events for the Method
  trackLead: (type: 'triagem' | 'contato' | 'agendamento') => {
    analytics.trackEvent('Lead', { content_category: type });
  },

  trackPurchase: (planName: string, value: number) => {
    analytics.trackEvent('Purchase', { 
      content_name: planName, 
      value: value, 
      currency: 'BRL' 
    });
  }
};
