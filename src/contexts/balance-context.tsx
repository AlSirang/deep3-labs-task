import { createContext } from 'react'
import { useAccount, useBalance, useChainId } from 'wagmi'
import { chainIdToWethAddress } from '@/lib/constatns'
import { formatUnits } from 'viem'

type BalanceContextType = {
  wethBalance: string
  ethBalance: string
  wethLoading: boolean
  balanceLoading: boolean
  refetchEthBalance: () => void
  refetchWethBalance: () => void
}

const BalanceContext = createContext<BalanceContextType>({
  wethBalance: '0',
  ethBalance: '0',
  wethLoading: false,
  balanceLoading: false,
  refetchEthBalance: () => {},
  refetchWethBalance: () => {},
})

const BalanceContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { address } = useAccount()
  const chainId = useChainId()

  // fetch eth balance
  const {
    data: rawBalance,
    isLoading: balanceLoading,
    refetch: refetchEthBalance,
  } = useBalance({
    address,
    chainId,
    scopeKey: 'formatted-balance',
  })

  const formattedBalance = formatUnits(rawBalance?.value || 0n, rawBalance?.decimals || 18)

  // fetch weth balance
  const wethAddress = chainIdToWethAddress[chainId]
  const {
    data: balance,
    isLoading: wethLoading,
    refetch: refetchWethBalance,
  } = useBalance({
    address,
    chainId,
    token: wethAddress,
    scopeKey: 'weth-balance',
  })

  const wethFormattedBalance = formatUnits(balance?.value || 0n, balance?.decimals || 18)

  return (
    <BalanceContext.Provider
      value={{
        wethBalance: wethFormattedBalance,
        ethBalance: formattedBalance,
        wethLoading,
        balanceLoading,
        refetchEthBalance,
        refetchWethBalance,
      }}>
      {children}
    </BalanceContext.Provider>
  )
}

export { BalanceContextProvider, BalanceContext }
