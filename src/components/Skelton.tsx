const Skelton = ({ totalEm }: { totalEm: number }) => {
  return (
    <>
      {[...Array(totalEm)].map((_, index) => (
        <div key={index} className="h-[480px] w-full bg-neutral-100"></div>
      ))}
    </>
  );
};

export default Skelton;
