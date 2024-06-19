import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

export const Footer: FC = () => {
  return (
    <>
      <div className="bg-gray-700">
        <div className="h-5 bg-white rounded-b-2xl" />
      </div>
      <footer className="bg-gray-700 text-white foo relative z-10">
        <ul className="grid gap-4 p-4 grid-cols-3 max-w-[1312px] mx-auto">
          <li className="md:col-span-3">
            <a
              href="https://github.com/jnwelzel/"
              target="_blank"
              className="flex items-center gap-2">
              <IoLogoGithub className="size-6" /> Github
            </a>
          </li>
          <li className="justify-self-center md:col-span-3 md:justify-self-start">
            <a
              href="https://www.linkedin.com/in/jonwelzel/"
              target="_blank"
              className="flex items-center gap-2">
              <IoLogoLinkedin className="size-6" /> LinkedIn
            </a>
          </li>
          <li className="justify-self-end md:col-span-3 md:justify-self-start">
            <a href="mailto:contact@jonwelzel.online" className="flex items-center gap-2">
              <EnvelopeIcon className="size-6" />
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}
