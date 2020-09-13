import React from "react";
import { useAddToCartInput } from "./hook";
import styles from './styles.module.css'

export type Props = {
  id: string,
}

export const AddToCartInput: React.FC<Props> = (props: Props) => {
  const { quantity, onSubmit, onChange } = useAddToCartInput(props)

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="number"
        value={quantity}
        onChange={onChange}
        min={1}
        max={10}
        step="1"
      />
      <button type="submit" className={styles.submitBtn}>Add to cart</button>
    </form>
  )
}
