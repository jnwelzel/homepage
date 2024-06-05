import { FC } from "react";
import { Link } from "react-router-dom";

export const HomePage: FC = () => {
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
          className="block absolute -inset-1 bg-slate-600 w-1"
          aria-hidden="true"
        ></span>
        <p className="ml-2">
          I'm Jonathan, a Brazilian full stack Javascript developer currently
          living in Germany with my beautiful wife and two wonderful kids. To
          learn more about me click{" "}
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
