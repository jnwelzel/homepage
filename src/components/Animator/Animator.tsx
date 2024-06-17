import { FC } from 'react'
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoSass,
  IoLogoReact,
} from 'react-icons/io5'
import { BiLogoGraphql } from 'react-icons/bi'
import { SiVite, SiStorybook, SiTailwindcss } from 'react-icons/si'

import './Animator.css'

export const Animator: FC = () => {
  return (
    <div className="overflow-hidden w-full shadow bg-neutral-100 py-8 relative">
      <p className="mb-5 text-center">...and here's some of my favorite tech:</p>
      <ul className="flex flex-row items-center text-gray-700 lane">
        <li className="laneItem">
          <IoLogoHtml5 className="size-20 shadow" />
        </li>
        <li className="laneItem">
          <IoLogoCss3 className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoSass className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <SiTailwindcss className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <IoLogoJavascript className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoNodejs className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoReact className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <SiStorybook className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <SiVite className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <BiLogoGraphql className="size-20 drop-shadow" />
        </li>

        <li className="laneItem">
          <IoLogoHtml5 className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoCss3 className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoSass className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <SiTailwindcss className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <IoLogoJavascript className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoNodejs className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoReact className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <SiStorybook className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <SiVite className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <BiLogoGraphql className="size-20 drop-shadow" />
        </li>

        <li className="laneItem">
          <IoLogoHtml5 className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoCss3 className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoSass className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <SiTailwindcss className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <IoLogoJavascript className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoNodejs className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <IoLogoReact className="size-20 drop-shadow" />
        </li>
        <li className="laneItem">
          <SiStorybook className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <SiVite className="size-20 drop-shadow p-2" />
        </li>
        <li className="laneItem">
          <BiLogoGraphql className="size-20 drop-shadow" />
        </li>
      </ul>
      <div className="absolute w-8 md:w-16 bg-gradient-to-l from-white to-transparent top-0 bottom-0 right-0"></div>
      <div className="absolute w-8 md:w-16 bg-gradient-to-r from-white to-transparent top-0 bottom-0 left-0"></div>
    </div>
  )
}
