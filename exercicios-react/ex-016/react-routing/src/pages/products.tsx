import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product1" },
  { id: "p2", title: "Product2" },
  { id: "p3", title: "Product3" },
];

const ProductsPage = () => {
  return (
    <div>
      <h2>now you are on products!</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
