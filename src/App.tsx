import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { routes } from './routes'

export const App: FC = () => {
  return useRoutes(routes)
}
