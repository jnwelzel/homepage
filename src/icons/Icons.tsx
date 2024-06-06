import { FC } from "react";
import { GithubIcon } from "./GithubIcon";
import { Html5Icon } from "./Html5Icon";
import { Css3Icon } from "./Css3Icon";
import { TailwindIcon } from "./TailwindIcon";
import { JavascriptIcon } from "./JavascriptIcon";
import { NodeIcon } from "./NodeIcon";
import { ReactIcon } from "./ReactIcon";
import { ViteIcon } from "./ViteIcon";
import { StorybookIcon } from "./StorybookIcon";

export const Icons: FC = () => {
  return (
    <div className="grid grid-cols-12 w-full gap-4 p-4 justify-items-center items-center border rounded shadow">
      <GithubIcon />
      <Html5Icon />
      <Css3Icon />
      <TailwindIcon />
      <JavascriptIcon />
      <NodeIcon />
      <ReactIcon />
      <ViteIcon />
      <StorybookIcon />
    </div>
  );
};
