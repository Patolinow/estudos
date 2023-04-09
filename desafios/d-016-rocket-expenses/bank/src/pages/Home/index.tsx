import reactLogo from "../../assets/react.svg";
import { Card } from "../../components/Card";
import iconSearch from "../../assets/icons/iconSearch.svg";
import { TableInput } from "../../components/TableInput";

interface ITableInputProps {
  type: "income" | "outcome";
  title: string;
  subject: string;
  date: string;
  value: number;
}

export const Home = () => {
  const data: ITableInputProps[] = [
    {
      type: "income",
      title: "Salário",
      subject: "Salário",
      value: 450000,
      date: "01/04/2023",
    },
    {
      type: "outcome",
      title: "Rodízio de pizza",
      subject: "Alimentação",
      value: 3000,
      date: "01/04/2023",
    },
  ];

  return (
    <div className="h-screen bg-dark-gray text-white">
      <header className="flex justify-between bg-black h-[212px]">
        <div className="flex justify-between max-w-5xl w-full mx-auto pt-10 h-fit">
          <div className="flex flex-1 items-center gap-4">
            <img src={reactLogo} alt="logo" />
            <h3 className=" text-3xl">DT Money</h3>
          </div>
          <button className="bg-light-green p-4 rounded-md font-bold hover:bg-dark-green">
            Nova transação
          </button>
        </div>
      </header>
      <div className="flex justify-center -mt-16">
        <div className="grid grid-cols-3 gap-8 max-w-5xl w-full">
          <Card type="income" value={0} />
          <Card type="outcome" value={0} />
          <Card type="total" value={0} />
        </div>
      </div>
      <main>
        <div className="max-w-5xl w-full mx-auto flex justify-between mt-16 gap-8">
          <input
            type="text"
            className="flex-1 p-4 bg-black rounded-md "
            placeholder="Busque uma transação"
          />
          <button className="px-8 py-4 text-light-green rounded-md border-light-green border-2 border-solid text-base font-bold flex items-center hover:bg-black">
            <img src={iconSearch} alt="" className="mr-4" />
            Buscar
          </button>
        </div>
        <div className="max-w-5xl w-full mx-auto mt-8">
          {data.map((info, index) => (
            <TableInput
              type={info.type}
              title={info.title}
              value={info.value}
              date={info.date}
              subject={info.subject}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
