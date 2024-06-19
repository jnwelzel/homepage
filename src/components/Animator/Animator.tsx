import './Animator.css'

import { FC } from 'react'
import { BiLogoGraphql } from 'react-icons/bi'
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoSass,
} from 'react-icons/io5'
import { SiStorybook, SiTailwindcss, SiVite } from 'react-icons/si'

export const Animator: FC = () => {
  return (
    <div className="overflow-hidden w-full shadow bg-neutral-100 py-8 relative mb-8">
      <p className="mb-5 text-center">...and here's some of my favorite tech:</p>
      <ul className="flex flex-row items-center text-gray-700 lane">
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
