import './Header.css'

import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header: FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <>
      <nav className="shadow bg-neutral-100/[0.5] backdrop-blur p-3 z-20 md:w-[584px] md:mx-auto md:inset-x-0 md:mt-4 md:rounded-full md:px-6 md:py-3 fixed w-full">
        <ul className="flex items-center flex-1">
          <li className="bg-yellow-300 p-1 rounded">
            <Link to="/" className="text-lg font-semibold">
              JW
            </Link>
          </li>
          <li className="ml-auto flex items-center md:hidden">
            <button onClick={toggleSidebar}>
              {!isSidebarVisible ? (
                <Bars2Icon className="size-6" />
              ) : (
                <XMarkIcon className="size-6" />
              )}
            </button>
          </li>
          <li className="max-md:hidden md:visible ml-auto">
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'underline' : '')}>
              Blog
            </NavLink>
          </li>
          <li className="max-md:hidden md:visible md:ml-5">
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'underline' : '')}>
              Portfolio
            </NavLink>
          </li>
          <li className="max-md:hidden md:visible md:ml-5">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'underline' : '')}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      {isSidebarVisible ? (
        <div onClick={toggleSidebar} className="z-[9] fixed top-0 right-0 bottom-0 left-0" />
      ) : null}
      <aside
        className={`bg-neutral-100/[0.5] backdrop-blur shadow fixed right-0 top-[60px] bottom-0 z-10 slide-in ${isSidebarVisible ? 'slide-out' : ''} md:hidden`}>
        <ul
          className="grid"
          onFocus={() => setIsSidebarVisible(true)}
          onBlur={() => setIsSidebarVisible(false)}>
          <li className="px-8 py-2">
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'underline' : '')}>
              Blog
            </NavLink>
          </li>
          <li className="px-8 py-2">
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'underline' : '')}>
              Portfolio
            </NavLink>
          </li>
          <li className="px-8 py-2">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'underline' : '')}>
              About
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  )
}
