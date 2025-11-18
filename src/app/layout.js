import "./globals.css";
import "../index.css";
import "../prime.css";
import "../global.scss";
import "../App.css";
import "aos/dist/aos.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Providers } from "../providers";
import Script from "next/script";

export const metadata = {
  verification: {
    google: "-21MMiNg4HsiFdG-kiteNfjPiSWjpEzqgep8REsCJus",
  },
  other: {
    "msvalidate.01": "2B695D648C28EFB5F1925AACCC8043B3",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* <link rel="apple-touch-icon" href="/favicon.png" /> */}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GTVNNDD15Z"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-GTVNNDD15Z");
          `}
        </Script>



<Script
  id="ld-localbusiness"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://memate.com.au/#localbusiness",
      "name": "MeMate",
      "url": "https://memate.com.au",
      "image": "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
      "telephone": "0280802100",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9/89-97 Jones St",
        "addressLocality": "Ultimo",
        "addressRegion": "NSW",
        "postalCode": "2007", 
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.8790957,
        "longitude": 151.1966771
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }],
      "sameAs": [
        "https://www.facebook.com/mematesoftware/",
        "https://www.instagram.com/memateapp/"
      ],
      "priceRange": "$$" 
    })
  }}
/>

<Script
  id="ld-organization"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://memate.com.au/#org",
      "name": "MeMate",
      "alternateName": "Best Business Management Software, ERP & CRM Tools | MeMate",
      "url": "https://memate.com.au",
      "logo": "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
      "sameAs": [
        "https://www.facebook.com/mematesoftware/",
        "https://www.instagram.com/memateapp/"
      ]
    })
  }}
/>
<Script
  id="ld-softwareapp"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://memate.com.au/#software",
      "name": "MeMate",
      "url": "https://memate.com.au/",
      "applicationSuite": "MeMate Business Management Software",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": ["ProjectManagement","CRM","ERP"],
      "operatingSystem": ["iOS","Android","macOS","Web"], 
      "softwareVersion": "2.9",
      "description": "MeMate is an all-in-one cloud business management software for Australian SMEs, combining ERP, CRM, job & project management, scheduling, invoicing, and time tracking.",
      "keywords": [
        "Business Management Software",
        "ERP software",
        "CRM software",
        "Project management software",
        "Job management software",
        "SME software Australia"
      ],
      "inLanguage": "en-AU",
      "publisher": {
        "@type": "Organization",
        "name": "MeMate",
        "url": "https://memate.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg"
        },
        "sameAs": [
          "https://apps.apple.com/app/memate/id1563935364",
          "https://play.google.com/store/apps/details?id=com.memate"
        ]
      },
      "featureList": [
        "https://memate.com.au/features",
        "https://memate.com.au/features/project-management-software",
        "https://memate.com.au/features/job-management-software",
        "https://memate.com.au/features/employee-management-tools",
        "https://memate.com.au/features/profitability-and-budgeting-software",
        "https://memate.com.au/features/business-reporting-tools"
      ],
      "softwareHelp": "https://memate.com.au/faqs",
      "downloadUrl": [
        "https://apps.apple.com/app/memate/id1563935364",
        "https://play.google.com/store/apps/details?id=com.memate"
      ],
      "installUrl": [
        "https://apps.apple.com/app/memate/id1563935364",
        "https://play.google.com/store/apps/details?id=com.memate"
      ],
      "potentialAction": {
        "@type": "InstallAction",
        "target": [
          "https://apps.apple.com/app/memate/id1563935364",
          "https://play.google.com/store/apps/details?id=com.memate"
        ]
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Small and medium businesses"
      }
    })
  }}
/>








        {/* Google Ads  */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17393005307" id="ga-script" strategy="afterInteractive">
        </Script>
        <Script id="ga-script" strategy="afterInteractive">
         {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17393005307');`}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PX86X4XP');
          `}
        </Script>

        {/* Jotform Embed Script */}
        <Script id="jotform-script" strategy="lazyOnload">
          {`
            const jotScript = document.createElement("script");
            jotScript.src = "https://cdn.jotfor.ms/agent/embedjs/01975471ce517020b33b83343ee6c3d6fcc7/embed.js?skipWelcome=1&maximizable=1";
            document.body.appendChild(jotScript);
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PX86X4XP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}