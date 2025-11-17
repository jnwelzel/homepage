import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

export const Footer: FC = () => {
  return (
    <>
      <div className="bg-gray-700">
        <div className="h-5 bg-white rounded-b-2xl" />
      </div>
      <footer className="bg-gray-700 text-white relative z-10">
        <ul className="grid gap-4 px-4 py-12 grid-cols-3 md:flex max-w-[1312px] mx-auto">
          <li>
            <a
              href="https://github.com/jnwelzel/"
              target="_blank"
              className="flex items-center gap-2">
              <IoLogoGithub className="size-6" /> Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jonwelzel/"
              target="_blank"
              className="flex items-center gap-2">
              <IoLogoLinkedin className="size-6" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:contact@jonwelzel.online" className="flex items-center gap-2">
              <EnvelopeIcon className="size-6" />
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jnwelzel?igsh=ZXNza29sdXBneGVm"
              className="flex items-center gap-2">
              <FaInstagram className="size-6" />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/4917669494588" className="flex items-center gap-2">
              <FaWhatsapp className="size-6" />
              WhatsApp
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}
