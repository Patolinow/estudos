import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useAppSelector } from './hooks/use-redux';

function App() {
  const isOpen = useAppSelector(state => state.cart.isOpen)

  return (
    <Layout>
      {isOpen && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
