import { Dispatch } from "react";
import { Button } from "./ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type TPaginationProps = {
  totalDocs: number;
  currentPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  totalDocs,
  currentPage,
  setCurrentPage,
}: TPaginationProps) => {
  const totalPage = Math.ceil(totalDocs / 10);

  return (
    <div className="space-x-2 flex items-center justify-center mt-5">
      <Button
        disabled={currentPage === 0}
        variant="outline"
        size="icon"
        className="border-none shadow-none size-8"
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        <FaChevronLeft size={16} />
      </Button>
      {[...Array(totalPage)]?.map((_, index) => (
        <Button
          variant="outline"
          size="icon"
          className={`shadow-none size-8 ${
            currentPage === index
              ? "border-none bg-primary text-white hover:bg-primary hover:text-white"
              : "border-transparent hover:border-inherit"
          }`}
          key={index}
          onClick={() => setCurrentPage(index)}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        disabled={currentPage === totalPage - 1}
        variant="outline"
        size="icon"
        className="border-none shadow-none size-8"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        <FaChevronRight size={16} />
      </Button>
    </div>
  );
};

export default Pagination;
