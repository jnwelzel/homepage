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

export const Animator: FC = () => {
  return (
    <div className="overflow-hidden w-full shadow bg-neutral-100 py-8 relative">
      <div className="absolute w-8 md:w-16 bg-gradient-to-r from-white to-transparent top-0 bottom-0 left-0"></div>
      <p className="mb-5 text-center">...and here's some of my favorite tech:</p>
      <ul className="flex flex-row gap-10 md:gap-20 items-center text-gray-700">
        <li>
          <IoLogoHtml5 className="size-16 md:size-20" />
        </li>
        <li>
          <IoLogoCss3 className="size-16 md:size-20" />
        </li>
        <li>
          <IoLogoSass className="size-16 md:size-20" />
        </li>
        <li>
          <SiTailwindcss className="size-16 md:size-20 p-2" />
        </li>
        <li>
          <IoLogoJavascript className="size-16 md:size-20" />
        </li>
        <li>
          <IoLogoNodejs className="size-16 md:size-20" />
        </li>
        <li>
          <IoLogoReact className="size-16 md:size-20" />
        </li>
        <li>
          <SiStorybook className="size-16 md:size-20 p-2" />
        </li>
        <li>
          <SiVite className="size-16 md:size-20 p-2" />
        </li>
        <li>
          <BiLogoGraphql className="size-16 md:size-20" />
        </li>

        <li>
          <IoLogoHtml5 className="size-16 md:size-20" />
        </li>
        <li>
          <IoLogoCss3 className="size-16 md:size-20" />
        </li>
        <li>
          <IoLogoSass className="size-16 md:size-20" />
        </li>
        <li>
          <SiTailwindcss className="size-16 md:size-20 p-2" />
        </li>
        <li>
          <IoLogoJavascript className="size-16 md:size-20" />
        </li>
        <li>
          <IoLogoNodejs className="size-16 md:size-20" />
        </li>
        <li>
          <IoLogoReact className="size-16 md:size-20" />
        </li>
        <li>
          <SiStorybook className="size-16 md:size-20 p-2" />
        </li>
        <li>
          <SiVite className="size-16 md:size-20 p-2" />
        </li>
        <li>
          <BiLogoGraphql className="size-16 md:size-20" />
        </li>
      </ul>
      <div className="absolute w-8 md:w-16 bg-gradient-to-l from-white to-transparent top-0 bottom-0 right-0"></div>
    </div>
  )
}
