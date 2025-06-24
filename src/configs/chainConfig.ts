import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'
import { createWeb3Modal } from '@web3modal/wagmi/react'

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID

const chains = [mainnet, sepolia] as const

export const wagmiConfig = createConfig({
  chains,
  connectors: [injected(), walletConnect({ projectId, showQrModal: false })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

// Initialize WalletConnect
createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: 'light',
  themeVariables: {
    '--w3m-border-radius-master': '0.085rem',
  },
})
