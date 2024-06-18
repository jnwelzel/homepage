import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

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
      <div className="p-4 pb-0 max-w-[1312px] mx-auto mt-[60px] flex flex-col justify-center items-center md:mt-40">
        <span>
          <h1 className="text-9xl font-extrabold text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mt-10 md:mt-0 drop-shadow">
            Olá
          </h1>
          <p className="text-left">(that's "hello" in Portuguese)</p>
        </span>
        <TextBar className="my-10 md:my-28">
          I'm Jonathan, a Brazilian full stack Javascript developer living in Germany since 2019. I
          have a great eye for detail and a passion for creating dynamic, responsive, and
          user-friendly web apps. I thrive in collaborative and diverse environments, consistently
          delivering high-quality and well-tested code along with innovative solutions to meet
          project goals and enhance user experiences at the same time. To learn more about my
          professional background and experience click{' '}
          <Link to="/about" className="underline">
            here
          </Link>
          .
        </TextBar>
      </div>
      <Animator />
      <div className="h-10"></div>
    </>
  )
}
