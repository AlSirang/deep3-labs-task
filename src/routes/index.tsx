import Home from '@/pages/home'
import NotFound from '@/pages/not-found'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
