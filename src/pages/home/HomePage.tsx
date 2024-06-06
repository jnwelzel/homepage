import { FC } from 'react'
import { Link } from 'react-router-dom'

import cssLogo from '../../assets/css.svg'
import htmlLogo from '../../assets/html.svg'
import javascriptLogo from '../../assets/javascript.svg'
import nodejsLogo from '../../assets/nodejs.svg'
import reactLogo from '../../assets/react.svg'
import typescriptLogo from '../../assets/typescript.svg'

export const HomePage: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-40">
      <span>
        <div className="text-9xl font-extrabold">
          <h1 className="text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mt-10 md:mt-0">
            Olá
          </h1>
        </div>
        <p className="text-left">(that's "hello" in Portuguese)</p>
      </span>
      <span className="relative my-10">
        <span className="block absolute inset-0 bg-black w-1" aria-hidden="true"></span>
        <p className="ml-2">
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
        </p>
      </span>
      <div className="mb-5">
        <p className="mb-5">...and here's some of my favorite tech:</p>
        <div className="grid gap-4 grid-cols-3 md:grid-cols-6 md:gap-6 items-center">
          <img src={htmlLogo} className="w-20" alt="HTML5 logo" />
          <img src={cssLogo} className="w-20" alt="CSS3 logo" />
          <img src={javascriptLogo} className="w-20" alt="Javascript logo" />
          <img src={typescriptLogo} className="w-20" alt="Typescript logo" />
          <img src={nodejsLogo} className="w-20" alt="NodeJS logo" />
          <img src={reactLogo} className="w-20" alt="React logo" />
        </div>
      </div>
    </div>
  )
}
