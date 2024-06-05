import { FC } from "react";

export const Footer: FC = () => {
  return (
    <>
      <div className="bg-black">
        <div className="h-5 bg-white rounded-b-2xl" />
      </div>
      <footer className="bg-black text-white foo relative z-10">
        <ul className="grid gap-4 p-4 grid-cols-3 md:max-w-[1280px] md:mx-auto md:px-0">
          <li className="md:col-span-3">
            <a href="https://github.com/jnwelzel/" target="_blank">
              Github
            </a>
          </li>
          <li className="justify-self-center md:col-span-3 md:justify-self-start">
            <a
              href="https://www.linkedin.com/in/jonwelzel/"
              target="_blank"
              className="hover:ring hover:ring-white hover:ring-offset-4"
            >
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
