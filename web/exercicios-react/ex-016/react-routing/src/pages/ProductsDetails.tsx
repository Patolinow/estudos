import { useParams, Link } from "react-router-dom"

const ProductDetailsPage = () => {
  const params = useParams()

  return (<>
  <h1>Details of product</h1>
  <p>{params.productId}</p>
  <p><Link to={".."} relative="route">Back</Link></p>
  </>)
}

export default ProductDetailsPage