import { FC } from "react";
import { Link } from "react-router-dom";

export const HomePage: FC = () => {
  // TODO Icons: javascript, react, tailwind, css, html 5, node
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <span>
        <div className="text-9xl font-extrabold">
          <h1 className="text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Olá
          </h1>
        </div>
        <p className="text-left">(that's "hello" in Portuguese)</p>
      </span>
      <span className="relative my-10">
        <span
          className="block absolute inset-0 bg-black w-1"
          aria-hidden="true"
        ></span>
        <p className="ml-2">
          I'm Jonathan, a Brazilian full stack Javascript developer living in
          Germany since 2019. I have a great eye for detail and a passion for
          creating dynamic, responsive, and user-friendly web apps. I thrive in
          collaborative and diverse environments, consistently delivering
          high-quality and well-tested code along with innovative solutions to
          meet project goals and enhance user experiences at the same time. To
          learn more about my professional background click{" "}
          <Link to="/about" className="underline">
            here
          </Link>
          .
        </p>
      </span>
      <p>
        Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum.
      </p>
    </div>
  );
};
