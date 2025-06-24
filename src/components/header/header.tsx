import { Menu, Wallet } from 'lucide-react'
import logo from '@/assets/logo.svg'

import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'

const navigation = [
  {
    label: 'Dashboard',
    to: '/',
  },
  {
    label: 'Staking',
    to: '/staking',
  },
  {
    label: 'Portfolio',
    to: '/portfolio',
  },
  {
    label: 'Analytics',
    to: '/analytics',
  },
]

const Header = () => {
  const { toggleSidebar } = useSidebar()
  const location = useLocation()

  return (
    <header className='sticky top-0 z-50 border-b border-[var(--border)]/20 bg-[var(--background)]/10 backdrop-blur-2xl supports-[backdrop-filter]:bg-[var(--background)]/5'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-8 md:space-x-12'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl blur-xl opacity-30'></div>
              <img src={logo} alt='Deep3 Labs Logo' className='relative w-auto h-8' />
            </div>

            <nav className='hidden lg:flex items-center gap-6 md:gap-8'>
              {navigation.map(({ label, to }) => (
                <Link
                  to={to}
                  key={label}
                  className={`font-semibold tracking-wide px-2 py-1 transition ${
                    location.pathname === to
                      ? 'text-[var(--primary)]'
                      : 'text-[var(--foreground)] hover:text-[var(--primary)]'
                  }`}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className='flex items-center space-x-4 md:space-x-6'>
            <Button className='relative group bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] font-semibold px-6 md:px-8 py-2 md:py-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/25'>
              <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-xl md:rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity'></div>
              <Wallet className='relative w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3' />
              <span className='relative text-sm md:text-base'>Connect Wallet</span>
            </Button>
            <button
              onClick={toggleSidebar}
              className='block lg:hidden p-2 rounded-lg hover:bg-[var(--muted)] transition-colors'
              aria-label='Toggle sidebar'>
              <Menu className='w-5 h-5 text-[var(--foreground)]' />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
