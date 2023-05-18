import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CartContextProvider from "./components/contexts/CartProvider";

function App() {

  return (  
    <CartContextProvider>
    <div className="App">
      <Header />
      <Main/>
    </div>
    </CartContextProvider>
  );
}

export default App;
