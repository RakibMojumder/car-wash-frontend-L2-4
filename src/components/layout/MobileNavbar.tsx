import { motion as m } from "framer-motion";
import { ReactNode } from "react";

type TMobileNavProps = {
  children: ReactNode;
};

const MobileNavbar = ({ children }: TMobileNavProps) => {
  return (
    <m.div
      initial={{ height: 0 }}
      animate={{
        height: "auto",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      exit={{ height: 0, transition: { duration: 0.3 } }}
      className="absolute top-full right-0 w-full p-4 md:p-8 bg-white/60 backdrop-blur overflow-hidden z-50"
    >
      {children}
    </m.div>
  );
};

export default MobileNavbar;
