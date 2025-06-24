import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'

/** Components imports */
import { Wallet } from 'lucide-react'
import { Button } from '../ui/button'

/** Utils imports */
import { shortenAddress } from '@/lib/address-utils'

const ConnectWalletButton = () => {
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()

  return (
    <Button
      onClick={() => !isConnected && open()}
      className='relative group bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] font-semibold px-6 md:px-8 py-2 md:py-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/25'>
      <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-xl md:rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity'></div>
      <Wallet className='relative w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3' />
      <span className='relative text-sm md:text-base'>
        {shortenAddress(address) || <span className='capitalize'>Connect Wallet</span>}
      </span>
    </Button>
  )
}

export default ConnectWalletButton
