import { RouterProvider } from 'react-router'
import router from './routes'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './configs/chainConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToasterProvider } from './components/toaster-provider'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToasterProvider />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
