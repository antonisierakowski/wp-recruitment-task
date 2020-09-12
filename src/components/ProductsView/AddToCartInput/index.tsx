import React, { useCallback, useContext, useState } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

type Props = {
  id: string,
}

export const AddToCartInput: React.FC<Props> = ({ id }: Props) => {
  const { addItem } = useContext(ShoppingCartContext)
  const [ quantity, setQuantity ] = useState<string>('0')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => setQuantity(event.target.value);

  const onSubmit = useCallback((event: React.FormEvent): void => {
    event.preventDefault();
    const parsedQuantity = parseInt(quantity)
    if (validateQuantity(parsedQuantity)) {
      addItem(id, parsedQuantity);
    }
  }, [id, quantity, addItem])

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={quantity}
        onChange={onChange}
        min={0}
        max={10}
        step="1"
      />
      <button type="submit">add to cart</button>
    </form>
  )
}

const validateQuantity = (value: number): boolean => {
  if (Number.isNaN(value)) {
    return false;
  }
  if (value < 0 || value > 10) {
    return false;
  }
  return true;
}
