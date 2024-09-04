import { useEffect, RefObject } from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  fn: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        fn();
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fn]);
};

export default useClickOutside;
