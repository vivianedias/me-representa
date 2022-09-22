import Script from "next/script"
import { GA_TRACKING_ID } from "./utils"

/* Adicionar como ultimo componente em _app.js */
const Analytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <Script
      id="ga-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
      }}
    />
  </>
)

export default Analytics
