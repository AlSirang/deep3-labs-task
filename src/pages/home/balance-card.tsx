import LoadingProgress from '@/components/loading-progress'
import useBalanceContext from '@/hooks/use-balance-context'

const BalanceCard = () => {
  const { wethBalance, wethLoading } = useBalanceContext()

  return (
    <div className='bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/10 rounded-2xl p-6 md:p-8 border border-[var(--primary)]/5'>
      <div className='text-center space-y-3'>
        <p className='text-[var(--muted-foreground)] text-sm font-medium uppercase tracking-wider'>
          Available Balance
        </p>
        <p className='text-2xl md:text-4xl font-black text-[var(--foreground)]'>
          {wethLoading ? <LoadingProgress /> : wethBalance}
        </p>
        <p className='text-base md:text-lg text-[var(--primary)] font-semibold'>wETH</p>
      </div>
    </div>
  )
}

export default BalanceCard
