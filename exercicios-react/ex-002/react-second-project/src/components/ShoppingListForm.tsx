import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const productRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = productRef.current!.value;
    const newQuantity = Number(quantityRef.current!.value);
    onAddItem(newProduct, newQuantity);
    
    productRef.current!.value = "";
    quantityRef.current!.value = "1";
    
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productRef} />
      <br />
      <input type="number" name="" id="" ref={quantityRef} placeholder="Product quantity" />
      <br />
      <button type="submit">Add Item</button>
    </form>
  );
}
