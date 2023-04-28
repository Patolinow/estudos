import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export const Home = (): JSX.Element => {

  return (
    <div className="min-h-screen bg-dark-gray text-white">
      <Header />
      <Main />
    </div>
  );
};
