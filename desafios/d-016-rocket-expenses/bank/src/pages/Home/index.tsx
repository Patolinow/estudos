import ITableInputProps from "../../interfaces/ITableInputProps";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export const Home = ():JSX.Element => {
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
      
      <Header/>
      <Main data={data}/>
    </div>
  );
};
