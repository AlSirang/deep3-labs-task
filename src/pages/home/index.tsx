import { AppLayout } from '@/layouts'
import { Badge } from '@/components/ui/badge'
import { Lock, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChainInformation } from '@/components/chain-information'
import StakingForm from './staking-form'
import BalanceCard from './balance-card'
import { BalanceContextProvider } from '@/contexts/balance-context'

function Home() {
  return (
    <AppLayout>
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
          {/* Main Staking Interface */}
          <div className='lg:col-span-2'>
            <Card className='bg-[var(--card)]/40 border-[var(--border)]/50 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-[var(--primary)]/30 '>
              <CardHeader>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                  <div className='space-y-2'>
                    <CardTitle className='text-[var(--foreground)] text-xl md:text-2xl font-black'>
                      Institutional Staking
                    </CardTitle>
                    <p className='text-[var(--muted-foreground)] font-medium text-sm md:text-base'>
                      Stake gD3L tokens to earn premium rewards
                    </p>
                  </div>
                  <Badge className='bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] font-semibold px-3 md:px-4 py-2 rounded-xl shadow-lg self-start sm:self-auto'>
                    <Shield className='w-4 h-4 mr-2' />
                    Audited
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className='space-y-6 md:space-y-8'>
                <BalanceContextProvider>
                  {/* Balance Display */}
                  <BalanceCard />

                  {/* Staking Form */}
                  <StakingForm />
                </BalanceContextProvider>

                <div className='bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/10 rounded-2xl p-4 md:p-6 border border-[var(--primary)]/5'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='relative'>
                      <div className='absolute inset-0 bg-[var(--primary)]/50 rounded-xl blur-lg'></div>
                      <Lock className='relative w-5 h-5 text-[var(--primary)]' />
                    </div>
                    <span className='text-[var(--primary)] font-bold text-base md:text-lg'>
                      Staking Benefits
                    </span>
                  </div>
                  <ul className='text-sm text-[var(--muted-foreground)] space-y-2 font-medium'>
                    <li className='flex items-center space-x-2'>
                      <div className='w-1.5 h-1.5 bg-[var(--primary)] rounded-full'></div>
                      <span>18.7% APY with compound rewards</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <div className='w-1.5 h-1.5 bg-[var(--primary)] rounded-full'></div>
                      <span>Governance voting rights</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <div className='w-1.5 h-1.5 bg-[var(--primary)] rounded-full'></div>
                      <span>Priority access to new features</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <div className='w-1.5 h-1.5 bg-[var(--primary)] rounded-full'></div>
                      <span>Insurance coverage up to $1M</span>
                    </li>
                  </ul>
                </div>
                <p className='text-center text-[var(--muted-foreground)] text-xs md:text-sm font-medium bg-[var(--card)]/50 rounded-xl p-3 md:p-4 border border-[var(--border)]/50'>
                  Rewards begin accruing at block 18,247,392 (≈ 2 minutes)
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <ChainInformation />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home
