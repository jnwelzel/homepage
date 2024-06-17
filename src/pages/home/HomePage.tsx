import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Animator } from '../../components'

export const HomePage: FC = () => {
  return (
    <>
      <div className="p-4 pb-0 max-w-[1312px] mx-auto mt-[60px] flex flex-col justify-center items-center md:mt-40">
        <span>
          <div className="md:text-9xl font-extrabold">
            <h1 className="text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mt-10 md:mt-0 drop-shadow">
              Olá
            </h1>
          </div>
          <p className="text-left">(that's "hello" in Portuguese)</p>
        </span>
        <span className="relative my-10 md:my-28">
          <span className="block absolute inset-0 bg-gray-700 w-1" aria-hidden="true"></span>
          <p className="ml-2">
            I'm Jonathan, a Brazilian full stack Javascript developer living in Germany since 2019.
            I have a great eye for detail and a passion for creating dynamic, responsive, and
            user-friendly web apps. I thrive in collaborative and diverse environments, consistently
            delivering high-quality and well-tested code along with innovative solutions to meet
            project goals and enhance user experiences at the same time. To learn more about my
            professional background and experience click{' '}
            <Link to="/about" className="underline">
              here
            </Link>
            .
          </p>
        </span>
      </div>
      <Animator />
      <div className="h-10"></div>
    </>
  )
}
