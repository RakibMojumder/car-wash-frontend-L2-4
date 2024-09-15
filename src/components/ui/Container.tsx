import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
  return (
    <div className="max-w-7xl mx-auto h-full px-5 md:px-0">{children}</div>
  );
};

export default Container;
