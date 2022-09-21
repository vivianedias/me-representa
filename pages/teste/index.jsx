import ReactGA from 'react-ga';

const GA_TRACKING_ID = process.env.GA_TRACKING_ID || "4083645711" // remover essa id depois
ReactGA.initialize(GA_TRACKING_ID)


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

export default Teste
