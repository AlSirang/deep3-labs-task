import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { BarChart3, Shield, Globe, Wallet, Settings, Home } from 'lucide-react'

// Navigation items
const navItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'Staking',
    url: '/staking',
    icon: Shield,
  },
  {
    title: 'Portfolio',
    url: '/portfolio',
    icon: Wallet,
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: BarChart3,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
]

function AppSidebar() {
  return (
    <Sidebar className='bg-[var(--sidebar)] border-r border-[var(--sidebar-border)]'>
      <SidebarHeader className='border-b border-[var(--sidebar-border)] p-4'>
        <div className='flex items-center gap-3'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-xl blur-lg opacity-30'></div>
            <Globe className='relative w-6 h-6 text-[var(--primary)]' />
          </div>
          <div>
            <h2 className='text-lg font-bold text-[var(--sidebar-foreground)]'>Market Overview</h2>
            <p className='text-xs text-[var(--muted-foreground)]'>Live DeFi metrics</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className='px-4 py-2 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider'>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className='hover:bg-[var(--sidebar-accent)] transition-colors'
                    variant='default'>
                    <a href={item.url} className='flex items-center gap-3'>
                      <item.icon className='w-4 h-4' />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
