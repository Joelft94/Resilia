import { TagadaProvider } from '@tagadapay/plugin-sdk/react'
import { RosabellaMoringaLanding } from './components/RosabellaMoringaLanding'

function App() {
  return (
    <TagadaProvider
      environment="production"
      debugMode={true}
      blockUntilSessionReady={true}
    >
      <RosabellaMoringaLanding />
    </TagadaProvider>
  )
}

export default App