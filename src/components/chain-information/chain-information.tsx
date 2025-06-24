import { Activity, Network, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ChainInformation = () => {
  return (
    <Card className='bg-gradient-to-br from-[var(--card)]/60 to-[var(--card)]/40 border-[var(--border)]/30 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-[var(--primary)]/20'>
      <CardHeader className='pb-3'>
        <CardTitle className='text-[var(--foreground)] flex items-center text-lg font-black'>
          <div className='relative mr-3'>
            <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-xl blur-lg opacity-50'></div>
            <Network className='relative w-5 h-5 text-[var(--primary)]' />
          </div>
          Network Status
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Chain Name Row */}
        <div className='bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/10 rounded-2xl p-4 border border-[var(--primary)]/10'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse'></div>
              <span className='text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider'>
                Chain
              </span>
            </div>
            <div className='text-right'>
              <span className='text-lg font-black bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent'>
                Deep3 Labs
              </span>
              <p className='text-xs text-[var(--secondary)] font-semibold'>Mainnet</p>
            </div>
          </div>
        </div>

        {/* Block Number Row */}
        <div className='bg-gradient-to-r from-[var(--accent)]/5 to-[var(--secondary)]/10 rounded-2xl p-4 border border-[var(--accent)]/10'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='relative'>
                <div className='absolute inset-0 bg-[var(--accent)]/50 rounded-full blur-sm animate-pulse'></div>
                <Activity className='relative w-4 h-4 text-[var(--accent)]' />
              </div>
              <span className='text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider'>
                Current Block
              </span>
            </div>
            <div className='text-right'>
              <span className='text-lg font-black text-[var(--foreground)] font-mono'>
                #18,247,392
              </span>
              <div className='flex items-center gap-1 mt-1'>
                <TrendingUp className='w-3 h-3 text-[var(--secondary)]' />
                <p className='text-xs text-[var(--secondary)] font-semibold'>+12 blocks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Network Health Indicator */}
        <div className='flex items-center justify-between pt-2'>
          <span className='text-xs text-[var(--muted-foreground)] font-medium'>Network Health</span>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-[var(--secondary)] rounded-full animate-pulse'></div>
            <span className='text-xs font-semibold text-[var(--secondary)]'>99.9% Uptime</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ChainInformation
