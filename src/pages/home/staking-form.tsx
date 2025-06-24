import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DollarSign } from 'lucide-react'

const StakingForm = () => {
  return (
    <section className='space-y-6'>
      <div className='flex items-center justify-between'>
        <label className='text-[var(--foreground)] font-semibold text-base md:text-lg'>
          Stake Amount
        </label>
        <Button
          variant='ghost'
          size='sm'
          className='text-[var(--primary)] hover:text-[var(--accent)] hover:bg-[var(--primary)]/20 font-semibold'>
          Max
        </Button>
      </div>

      {/* Premium Input Field */}
      <div className='bg-[var(--background)]/80 border-2 border-[var(--primary)]/30 rounded-2xl p-4 md:p-6'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4'>
          <div className='flex items-center space-x-2'>
            <DollarSign className='w-5 h-5 text-[var(--primary)]' />
            <span className='text-[var(--muted-foreground)] font-medium'>Amount</span>
          </div>
          <div className='flex items-center justify-between sm:justify-end space-x-2'>
            <span className='text-[var(--muted-foreground)] text-xs sm:text-sm'>
              Available: 1,247,892.5847
            </span>
            <Button
              variant='ghost'
              size='sm'
              className='text-[var(--primary)] hover:text-[var(--accent)] hover:bg-[var(--primary)]/20 font-semibold text-sm'>
              MAX
            </Button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <div className='flex-1'>
            <Input
              type='text'
              className='border-none bg-transparent text-[var(--foreground)] text-2xl md:text-3xl font-black h-12 md:h-16 rounded-2xl ring-0 focus:ring-0 focus:outline-none'
              placeholder='0.00'
            />
          </div>
        </div>

        <div className='m-4 pt-4 border-t border-[var(--border)]/30'>
          <div className='flex justify-between text-sm'>
            <span className='text-[var(--muted-foreground)]'>Estimated Value:</span>
            <span className='text-[var(--foreground)] font-semibold'>$0.00</span>
          </div>
        </div>
      </div>
      <Button
        size='lg'
        className='relative group w-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] h-12 md:h-16 text-lg md:text-xl font-black rounded-2xl shadow-2xl shadow-[var(--primary)]/30'>
        Stake Tokens
      </Button>
    </section>
  )
}

export default StakingForm
