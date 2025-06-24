import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Background layers */}
      <div className='absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--primary)]/5 to-[var(--accent)]/10'></div>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)/10%,transparent_50%)]'></div>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--accent)]/5%,transparent_50%)]'></div>

      {/* Animated gradient orbs */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse delay-1000'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-screen px-8'>
        <div className='text-center space-y-8 max-w-2xl'>
          {/* 404 Number */}
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-3xl blur-2xl opacity-30'></div>
            <h1 className='relative text-9xl font-black bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent'>
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className='space-y-4'>
            <h2 className='text-4xl font-black text-[var(--foreground)]'>Page Not Found</h2>
            <p className='text-xl text-[var(--muted-foreground)] font-medium leading-relaxed'>
              The page you're looking for doesn't exist or has been moved to another dimension.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-8'>
            <Button
              asChild
              className='relative group bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--primary)] text-[var(--primary-foreground)] font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-[var(--primary)]/25 hover:shadow-[var(--accent)]/25 transition-all duration-300 hover:scale-105'>
              <Link to='/'>
                <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity'></div>
                <Home className='relative w-5 h-5 mr-3' />
                <span className='relative'>Go Home</span>
              </Link>
            </Button>

            <Button
              variant='outline'
              asChild
              className='relative group border-[var(--border)]/50 bg-[var(--card)]/20 backdrop-blur-xl hover:bg-[var(--card)]/30 text-[var(--foreground)] font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105'>
              <button onClick={() => window.history.back()}>
                <ArrowLeft className='w-5 h-5 mr-3' />
                Go Back
              </button>
            </Button>
          </div>

          {/* Additional Info */}
          <div className='pt-12'>
            <div className='bg-[var(--card)]/20 backdrop-blur-xl border border-[var(--border)]/30 rounded-2xl p-6 max-w-md mx-auto'>
              <p className='text-sm text-[var(--muted-foreground)] font-medium'>
                If you believe this is an error, please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
