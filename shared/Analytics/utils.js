export const GA_TRACKING_ID = process.env.GA_TRACKING_ID || "UA-242296238-1" // remover essa id depois

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export const trackPageChange = (routerEvents) => {
  const handleRouteChange = url => {
    pageview(url)
  }
  routerEvents.on('routeChangeComplete', handleRouteChange)
  return () => {
    routerEvents.off('routeChangeComplete', handleRouteChange)
  }
}

export const DEFAULT_EVENTS = {
  click: "CLICK",
  error: "ERROR"
}
