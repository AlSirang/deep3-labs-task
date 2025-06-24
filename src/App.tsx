import { RouterProvider } from 'react-router'
import router from './routes'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './configs/chainConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
