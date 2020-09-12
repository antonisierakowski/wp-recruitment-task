import React, { useContext } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

export const ShoppingCart: React.FC = () => {
  const { totalNumberOfItems } = useContext(ShoppingCartContext)
  return (
    <>
      <p>number of items: {totalNumberOfItems}</p>
    </>
  )
}
