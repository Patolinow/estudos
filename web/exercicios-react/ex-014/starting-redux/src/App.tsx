import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import "./App.css"
import IAuthState from './interfaces/IAuthState';
import UserProfile from './components/UserProfile';

function App() {
  const authenticated = useSelector((state: IAuthState) => state.auth.authenticated)

  return (
    <>
      <Header />
      {authenticated ? <UserProfile/> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
