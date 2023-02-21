namespace Whatever {
  interface Product {
    price: number;
    name: string;
    quantity: number;
  }
  
  const printProduct = (product: Product):void => {
    console.log(`${product.name} - R$${product.price}`)
  }
}