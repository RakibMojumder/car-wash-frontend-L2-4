import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
<<<<<<< HEAD
  return (
    <div className="max-w-7xl mx-auto h-full px-5 md:px-0">{children}</div>
  );
=======
  return <div className="max-w-7xl mx-auto h-full">{children}</div>;
>>>>>>> 61c7c42ab61a5b8390833549be485098885c68e0
};

export default Container;
