import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../components'

export const LayoutPage: FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
