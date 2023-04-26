import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export const Home = (): JSX.Element => {

  return (
    <div className="h-screen bg-dark-gray text-white">
      <Header />
      <Main />
    </div>
  );
};
