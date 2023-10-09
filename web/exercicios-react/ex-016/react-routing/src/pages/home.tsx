import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate('/products')
  }

  return (
    <div>
      <h1>Now on home</h1>
      <p>
        click <Link to="/products">here</Link> to see our products
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  );
};

export default HomePage;
