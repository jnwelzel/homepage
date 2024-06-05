import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const LayoutPage: FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 p-4 md:max-w-[1280px] md:mx-auto md:p-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
