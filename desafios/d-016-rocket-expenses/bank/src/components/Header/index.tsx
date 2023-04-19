import reactLogo from "../../assets/react.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between bg-black h-[212px]">
      <div className="flex justify-between w-11/12 max-w-5xl mx-auto pt-10 h-fit">

        <div className="flex flex-1 items-center gap-4">
          <img src={reactLogo} alt="logo" />

          <h3 className=" text-3xl">DT</h3>
        </div>

        <button className="bg-light-green p-4 rounded-md font-bold hover:bg-dark-green">
          Nova transação
        </button>
        
      </div>
    </header>
  );
};
