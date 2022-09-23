import Script from "next/script"
import { GA_TRACKING_ID } from "./utils"

/* Adicionar como ultimo componente em _app.js */
const Analytics = () => (
  <>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          if (typeof window !== 'undefined) {
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', ${GA_TRACKING_ID});
          }
        `}
    </Script>
  </>
);

export default Analytics
