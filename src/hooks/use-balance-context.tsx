import { useContext } from 'react'
import { BalanceContext } from '@/contexts/balance-context'

const useBalanceContext = () => {
  const context = useContext(BalanceContext)
  if (!context) {
    throw new Error('useBalanceContext must be used within a BalanceProvider')
  }
  return context
}

export default useBalanceContext
