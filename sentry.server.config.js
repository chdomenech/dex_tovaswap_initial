// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({

  dns: SENTRY_DSN || 'https://941a978da549444c83ff72afd0f3ec9e@o1172427.ingest.sentry.io/6268016',
  //dsn: SENTRY_DSN || 'https://1656dc2294494dabb291865695678b12@o1169534.ingest.sentry.io/6262445',
  //dsn: SENTRY_DSN || 'https://1656dc2294494dabb291865695678b12@o1169534.ingest.sentry.io/6262445',
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.1,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
})
