import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const LayoutPage: FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 p-4 pb-0 max-w-[1280px] min-[1280px]:mx-auto min-[1280px]:p-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
