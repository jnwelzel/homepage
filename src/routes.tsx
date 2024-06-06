import { RouteObject } from 'react-router-dom'

import {
  AboutPage,
  BlogPage,
  ErrorPage,
  HomePage,
  LayoutPage,
  NotFoundPage,
  PortfolioPage,
} from './pages'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]
