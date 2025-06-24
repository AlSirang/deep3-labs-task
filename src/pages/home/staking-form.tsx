import { useState } from 'react'
import { useAccount, useChainId, usePublicClient, useWriteContract } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DollarSign } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { parseEther, type Abi, type WriteContractErrorType } from 'viem'
import { chainIdToWethAddress } from '@/lib/constatns'
import abi from '@/assets/abi.json'
import useBalanceContext from '@/hooks/use-balance-context'
import LoadingProgress from '@/components/loading-progress'

const StakingForm = () => {
  const [inProgress, setInProgress] = useState(false)
  const publicClient = usePublicClient()
  const { address } = useAccount()
  const { writeContractAsync } = useWriteContract()
  const chainId = useChainId()

  const { ethBalance, refetchEthBalance, refetchWethBalance } = useBalanceContext()

  const [amount, setAmount] = useState<string>('')

  // Helper to check for up to 18 decimals
  const isValidDecimals = (value: string) => {
    const parts = value.split('.')
    return parts.length === 1 || parts[1]?.length <= 18
  }

  const handleStake = () => {
    // check if user is connected
    if (!address || !publicClient) return toast.error('Please connect wallet')

    // check if amount is valid
    const numericAmount = Number(amount)
    if (!numericAmount || numericAmount <= 0) return toast.error('Please enter valid amount')
    if (!isValidDecimals(amount)) return toast.error('Max 18 decimals allowed')

    // check if balance is sufficient
    if (ethBalance && numericAmount > Number(ethBalance)) return toast.error('Insufficient balance')

    // get weth address
    const wethAddress = chainIdToWethAddress[chainId]

    // convert amount to wei
    const amountInWei = parseEther(amount)

    // deposit   tokens
    toast.promise(
      async () => {
        setInProgress(true)
        const txId = await writeContractAsync({
          abi: abi as Abi,
          address: wethAddress,
          functionName: 'deposit',
          args: [],
          value: amountInWei,
        })

        await publicClient.waitForTransactionReceipt({
          hash: txId,
          confirmations: 1,
        })
        refetchEthBalance()
        refetchWethBalance()
        setAmount('')
        setInProgress(false)
      },
      {
        loading: 'Please accept transaction and wait...',
        success: 'Staked tokens successfully',
        error: (error: WriteContractErrorType) => {
          setInProgress(false)
          // @ts-expect-error - shortMessage is not defined in the type but it is there
          const errorMessage = error.shortMessage as string
          return errorMessage || error.message || 'Something went wrong'
        },
      }
    )
  }

  // Handler to restrict decimals in input
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow only numbers and up to one dot
    if (!/^\d*\.?\d*$/.test(value)) return
    // Restrict to 18 decimals
    if (!isValidDecimals(value)) return
    setAmount(value)
  }

  return (
    <section className='space-y-6'>
      <div className='flex items-center justify-between'>
        <label className='text-[var(--foreground)] font-semibold text-base md:text-lg'>
          Stake Amount
        </label>
      </div>

      {/* Premium Input Field */}
      <div className='bg-[var(--background)]/80 border-2 border-[var(--primary)]/30 rounded-2xl p-4 md:p-6'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4'>
          <div className='flex items-center space-x-2'>
            <DollarSign className='w-5 h-5 text-[var(--primary)]' />
            <span className='text-[var(--muted-foreground)] font-medium'>Amount</span>
          </div>
          <div className='flex items-center justify-between sm:justify-end space-x-2'>
            <span className='text-[var(--muted-foreground)] font-medium'>
              Balance: {ethBalance}
            </span>
            <button
              className='cursor-pointer text-[var(--primary)] font-semibold text-sm hover:text-[var(--accent)]'
              onClick={() => setAmount(ethBalance || '')}>
              MAX
            </button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <div className='flex-1'>
            <Input
              type='text'
              className='border-none bg-transparent text-[var(--foreground)] text-2xl md:text-3xl font-black h-12 md:h-16 rounded-2xl ring-0 focus:ring-0 focus:outline-none'
              placeholder='0.00'
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
      </div>
      <Button
        size='lg'
        onClick={handleStake}
        className='relative group w-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] h-12 md:h-16 text-lg md:text-xl font-black rounded-2xl shadow-2xl shadow-[var(--primary)]/30'>
        {inProgress ? <LoadingProgress /> : 'Stake Tokens'}
      </Button>
    </section>
  )
}

export default StakingForm
