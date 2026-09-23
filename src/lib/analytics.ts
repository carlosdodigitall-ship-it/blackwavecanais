/**
 * Analytics & Tracking Integration
 * Supports Meta Pixel (Facebook Ads) and Google Analytics 4 (GA4)
 * Resilient implementation: will never break the app if IDs are missing.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '';
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

let isMetaInitialized = false;
let isGAInitialized = false;

/**
 * Initializes Meta Pixel script if VITE_META_PIXEL_ID is present
 */
export function initMetaPixel(): void {
  if (typeof window === 'undefined' || isMetaInitialized || !META_PIXEL_ID) return;

  try {
    /* eslint-disable */
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    window.fbq?.('init', META_PIXEL_ID);
    isMetaInitialized = true;
  } catch (err) {
    console.warn('[Analytics] Meta Pixel initialization failed gracefully:', err);
  }
}

/**
 * Initializes Google Analytics (GA4) if VITE_GA_MEASUREMENT_ID is present
 */
export function initGoogleAnalytics(): void {
  if (typeof window === 'undefined' || isGAInitialized || !GA_MEASUREMENT_ID) return;

  try {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
    isGAInitialized = true;
  } catch (err) {
    console.warn('[Analytics] GA4 initialization failed gracefully:', err);
  }
}

/**
 * Track PageView event
 */
export function trackPageView(): void {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'PageView');
  }

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
}

/**
 * Track ViewContent event (e.g. user views a specific key section)
 */
export function trackViewContent(contentName: string = 'LandingPage'): void {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_category: 'Entretenimento',
    });
  }

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'view_item', {
      item_name: contentName,
    });
  }
}

/**
 * Track Lead event (Triggered when user clicks to start contact on WhatsApp)
 */
export function trackLead(source: string = 'WhatsApp'): void {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'Lead', {
      content_name: `WhatsApp Lead - ${source}`,
      status: 'initiated',
    });
  }

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Engagement',
      event_label: source,
      method: 'WhatsApp',
    });
  }
}

/**
 * Track InitiateCheckout event (Triggered on pricing plan selection)
 */
export function trackInitiateCheckout(planName: string, value: number): void {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: planName,
      currency: 'BRL',
      value: value,
    });
  }

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'begin_checkout', {
      currency: 'BRL',
      value: value,
      items: [{ item_name: planName, price: value, quantity: 1 }],
    });
  }
}

/**
 * Track Purchase event
 * Note: Reserved for future backend / webhook conversion integration.
 * NEVER fired on initial WhatsApp click.
 */
export function trackPurchase(value: number, currency: string = 'BRL'): void {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
    });
  }

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'purchase', {
      currency: currency,
      value: value,
    });
  }
}
