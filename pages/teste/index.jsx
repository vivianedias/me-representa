const useAnalyticsEventTracker = (category = "Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label })
  }
  return eventTracker
}

const Teste = () => {
  const gaEventTracker = useAnalyticsEventTracker("Teste")
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div>
      <button onClick={() => gaEventTracker("test-btn")}> test btn</button>
    </div>
  )
}
