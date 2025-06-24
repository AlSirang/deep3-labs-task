import { AppLayout } from '@/layouts'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Shield, Lock, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Home() {
  return (
    <AppLayout>
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
          {/* Main Staking Interface */}
          <div className='lg:col-span-2'>
            <Card className='bg-[var(--card)]/40 border-[var(--border)]/50 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-[var(--primary)]/30'>
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
                {/* Balance Display */}
                <div className='bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/10 rounded-2xl p-6 md:p-8 border border-[var(--primary)]/5'>
                  <div className='text-center space-y-3'>
                    <p className='text-[var(--muted-foreground)] text-sm font-medium uppercase tracking-wider'>
                      Available Balance
                    </p>
                    <p className='text-2xl md:text-4xl font-black text-[var(--foreground)]'>
                      1,247,892.5847
                    </p>
                    <p className='text-base md:text-lg text-[var(--primary)] font-semibold'>
                      gD3L (~$2,847,392)
                    </p>
                  </div>
                </div>

                {/* Staking Form */}
                <div className='space-y-6'>
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
                          className='bg-transparent border-none text-[var(--foreground)] text-2xl md:text-3xl font-black h-12 md:h-16 placeholder:text-[var(--muted-foreground)]/30 focus:outline-none focus:ring-0'
                          placeholder='0.00'
                        />
                      </div>
                      <div className='bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-xl px-4 md:px-6 py-3 self-start sm:self-auto'>
                        <span className='text-[var(--primary-foreground)] font-bold text-base md:text-lg'>
                          gD3L
                        </span>
                      </div>
                    </div>

                    <div className='mt-4 pt-4 border-t border-[var(--border)]/30'>
                      <div className='flex justify-between text-sm'>
                        <span className='text-[var(--muted-foreground)]'>Estimated Value:</span>
                        <span className='text-[var(--foreground)] font-semibold'>$0.00</span>
                      </div>
                    </div>
                  </div>

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
                </div>

                <Button
                  size='lg'
                  className='relative group w-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] h-12 md:h-16 text-lg md:text-xl font-black rounded-2xl shadow-2xl shadow-[var(--primary)]/30'>
                  Stake Tokens
                </Button>

                <p className='text-center text-[var(--muted-foreground)] text-xs md:text-sm font-medium bg-[var(--card)]/50 rounded-xl p-3 md:p-4 border border-[var(--border)]/50'>
                  Rewards begin accruing at block 18,247,392 (≈ 2 minutes)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home
