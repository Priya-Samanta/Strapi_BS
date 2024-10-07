// module.exports = [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
//   // ...
//  "strapi::security",
//  {
//      name: "strapi::security",
//      config: {
//        contentSecurityPolicy: {
//         directives: {
//            "script-src": ["'self'", "editor.unlayer.com"],
//            "frame-src": ["'self'", "editor.unlayer.com"],
//            "img-src": [
//              "'self'",
//              "data:",
//              "cdn.jsdelivr.net",
//              "strapi.io",
//              "s3.amazonaws.com",
//            ],
//          },
//        },
//      },
//    },
// ];


module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          // Allow scripts from self, Vercel, and Unlayer
          "script-src": ["'self'", "vercel.app", "editor.unlayer.com"],
          // Allow iframes from self, Vercel, and Unlayer
          "frame-src": ["'self'", "vercel.app", "editor.unlayer.com"],
          // Allow images from self, Vercel, and trusted CDNs like jsDelivr, AWS S3, etc.
          "img-src": [
            "'self'",
            "data:", // Allow inline images
            "cdn.jsdelivr.net", // External CDN
            "strapi.io", // Strapi resources
            "s3.amazonaws.com", // AWS S3 buckets
            "vercel.app", // For Vercel-hosted resources (adjust if using a custom domain)
          ],
        },
      },
    },
  },
];
