import { Props as AddToCartInputProps } from "./index";
import React, { useCallback, useContext, useState } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

export type AddToCartInputHook = {
  quantity: string,
  isInvalid: boolean,
  onSubmit: (event: React.FormEvent) => void,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const useAddToCartInput = ({ id }: AddToCartInputProps): AddToCartInputHook => {
  const { addItem } = useContext(ShoppingCartContext)
  const [ quantity, setQuantity ] = useState<string>('0')
  const [ isInvalid, setError ] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => setQuantity(event.target.value);

  const onSubmit = useCallback((event: React.FormEvent): void => {
    event.preventDefault();
    const parsedQuantity = parseInt(quantity)
    if (validateQuantity(parsedQuantity, setError)) {
      addItem(id, parsedQuantity);
    }
  }, [id, quantity, addItem])

  return {
    quantity,
    isInvalid,
    onSubmit,
    onChange,
  }
}

const validateQuantity = (value: number, setError: (isInvalid: boolean) => void): boolean => {
  if (Number.isNaN(value)) {
    setError(true);
    return false;
  }
  if (value < 0 || value > 10) {
    setError(true);
    return false;
  }
  setError(false);
  return true;
}
