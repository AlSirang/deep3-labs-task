import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import { SuspenseFallback } from '@/components/suspense-fallback'

const Home = lazy(() => import('@/pages/home'))
const NotFound = lazy(() => import('@/pages/not-found'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <NotFound />
      </Suspense>
    ),
  },
])

export default router
