import { useAccount, useDisconnect } from 'wagmi'
import { Button } from '../ui/button'

const DisconnectButton = () => {
  const { disconnect } = useDisconnect()
  const { isConnected } = useAccount()
  if (!isConnected) {
    return null
  }
  return (
    <Button
      onClick={() => disconnect()}
      variant='outline'
      className='relative group font-semibold px-6 md:px-8 py-2 md:py-3 rounded-2xl'>
      <span className='relative text-sm md:text-base'>Disconnect</span>
    </Button>
  )
}

export default DisconnectButton
