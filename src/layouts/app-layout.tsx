import React from 'react'
import type { RootProps } from '../types'
import { Header } from '@/components/header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

const AppLayout: React.FC<RootProps> = ({ children }) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset className='!m-0 !rounded-none'>
        <Header />

        <main className='relative'>
          <div className='w-[14.875rem] md:w-[21.125rem] h-[14.875rem] md:h-[21.125rem]  absolute -top-[3.3125rem] left-0 bg-primary/50 filter blur-[11.25rem]' />

          <div className='absolute m-auto w-full  -top-[5rem] h-screen'>
            <img
              src={'/src/assets/background-loop.svg'}
              alt='background-loop'
              className='m-auto w-full object-cover h-full'
            />
          </div>

          <div className='w-[8.1875rem] md:w-[14.4375rem] h-[8.1875rem] md:h-[14.4375rem]  absolute top-[34.625rem] right-0 bg-primary/50 filter blur-[11.25rem]' />

          <div className=' relative max-w-7xl mx-auto px-8 py-6 z-10'>{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppLayout
