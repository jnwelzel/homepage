import './Header.css'

import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header: FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  const closeSidebar = () => {
    setIsSidebarVisible(false)
  }

  return (
    <>
      <nav className="bg-gray-700 border-0 shadow-lg md:shadow-none md:border md:border-white p-3 z-20 md:w-[584px] md:mx-auto md:inset-x-0 md:mt-4 md:rounded-full md:px-6 md:py-3 fixed w-full">
        <ul className="flex items-center flex-1">
          <li
            className="bg-yellow-300 rounded size-9 relative overflow-hidden"
            onClick={closeSidebar}>
            <Link
              to="/"
              className="text-lg font-semibold absolute bottom-[-4px] right-0 top-0 left-0 flex items-end justify-end pr-0.5">
              JW
            </Link>
          </li>
          <li className="ml-auto flex items-center md:hidden">
            <button onClick={toggleSidebar} aria-label="Toggle sidebar button">
              {!isSidebarVisible ? (
                <Bars2Icon className="size-6 text-white" />
              ) : (
                <XMarkIcon className="size-6 text-white" />
              )}
            </button>
          </li>
          <li className="max-md:hidden md:visible ml-auto text-white">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'underline decoration-fuchsia-500 underline-offset-4' : ''
              }>
              Blog
            </NavLink>
          </li>
          <li className="max-md:hidden md:visible md:ml-5 text-white">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? 'underline decoration-lime-500 underline-offset-4' : ''
              }>
              Portfolio
            </NavLink>
          </li>
          <li className="max-md:hidden md:visible md:ml-5 text-white">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'underline decoration-sky-500 underline-offset-4' : ''
              }>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      {isSidebarVisible ? (
        <div onClick={toggleSidebar} className="z-[9] fixed top-0 right-0 bottom-0 left-0" />
      ) : null}
      <aside
        className={`bg-gray-700 shadow fixed right-0 top-[60px] bottom-0 z-10 slide-in ${isSidebarVisible ? 'slide-out' : ''} md:hidden`}>
        <ul
          className="grid"
          onFocus={() => setIsSidebarVisible(true)}
          onBlur={() => setIsSidebarVisible(false)}>
          <li className="px-8 py-2 text-white">
            <NavLink
              to="/blog"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? 'underline decoration-fuchsia-500 underline-offset-4' : ''
              }>
              Blog
            </NavLink>
          </li>
          <li className="px-8 py-2 text-white">
            <NavLink
              to="/portfolio"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? 'underline decoration-lime-500 underline-offset-4' : ''
              }>
              Portfolio
            </NavLink>
          </li>
          <li className="px-8 py-2 text-white">
            <NavLink
              to="/about"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? 'underline decoration-sky-500 underline-offset-4' : ''
              }>
              About
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  )
}
