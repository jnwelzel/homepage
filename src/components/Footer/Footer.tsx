import { FC } from "react";
import { GithubIcon } from "../../icons";

export const Footer: FC = () => {
  return (
    <>
      <div className="bg-black">
        <div className="h-5 bg-white rounded-b-2xl" />
      </div>
      <footer className="bg-black text-white foo relative z-10">
        <ul className="grid gap-4 p-4 grid-cols-3 max-w-[1280px] min-[1280px]:mx-auto min-[1280px]:px-0">
          <li className="md:col-span-3">
            <a
              href="https://github.com/jnwelzel/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <GithubIcon /> Github
            </a>
          </li>
          <li className="justify-self-center md:col-span-3 md:justify-self-start">
            <a href="https://www.linkedin.com/in/jonwelzel/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="justify-self-end md:col-span-3 md:justify-self-start">
            <a href="mailto:contact@jonwelzel.online">Contact</a>
          </li>
        </ul>
      </footer>
    </>
  );
};
