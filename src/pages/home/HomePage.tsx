import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaEye, FaGlobeAmericas, FaGlobeEurope, FaLongArrowAltRight } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'

import { Animator, TextBar } from '../../components'

export const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>{'Jon Welzel'}</title>
        <meta
          name="description"
          content="Welcome to my homepage where you can find some information about me and my career."
        />
      </Helmet>
      <div className="p-4 pb-0 max-w-[1312px] mb-8 md:mb-12 mx-auto mt-[60px] flex flex-col justify-center items-center md:mt-40 before:absolute before:left-0 before:right-0 before:top-0 before:h-[420px] before:bg-gray-700 before:-z-10 before:shadow">
        <span className="mb-10">
          <h1 className="text-9xl font-extrabold text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mt-10 md:mt-0 drop-shadow">
            Olá
          </h1>
          <p className="text-left text-white text-sm">(that's "hello" in Portuguese)</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="p-6 bg-white shadow rounded-xl flex flex-col">
            <div className="flex items-center justify-center gap-4">
              <FaGlobeAmericas className="text-gray-700 size-20" />
              <FaLongArrowAltRight className="text-gray-700 size-14" />
              <FaGlobeEurope className="text-gray-700 size-20" />
            </div>
            <hr className="h-px bg-gray-700 border-0 my-6" />
            <TextBar>
              I'm Jonathan, a Brazilian full stack Javascript developer living in Germany since 2019
              and crafting software since 2008.
            </TextBar>
          </div>
          <div className="p-6 bg-white shadow rounded-xl flex flex-col">
            <FaEye className="text-gray-700 size-20 self-center" />
            <hr className="h-px bg-gray-700 border-0 my-6" />
            <TextBar>
              I have a great eye for detail and a passion for creating dynamic, responsive, and
              user-friendly web apps.
            </TextBar>
          </div>
          <div className="p-6 bg-white shadow rounded-xl flex flex-col">
            <FaPeopleGroup className="text-gray-700 size-20 self-center" />
            <hr className="h-px bg-gray-700 border-0 my-6" />
            <TextBar>
              I thrive in collaborative and diverse environments, consistently delivering
              high-quality and well-tested code.
            </TextBar>
          </div>
        </div>
      </div>
      <Animator />
    </>
  )
}
