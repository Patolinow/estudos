import ProductItem from "./ProductItem"
import classes from "./Products.module.css"

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="i1"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="i2"
          title="Second Test"
          price={3}
          description="This is a the second product - not as amazing as the first"
        />
      </ul>
    </section>
  )
}

export default Products
