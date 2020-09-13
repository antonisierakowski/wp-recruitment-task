import React from "react";
import { useAddToCartInput } from "./hook";

export type Props = {
  id: string,
}

export const AddToCartInput: React.FC<Props> = (props: Props) => {
  const { quantity, onSubmit, onChange, isInvalid } = useAddToCartInput(props)

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
