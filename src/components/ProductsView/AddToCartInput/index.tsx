import React from "react";
import { useAddToCartInput } from "./hook";
import styles from './styles.module.css'
import classNames from "classnames";

export type Props = {
  id: string,
}

export const AddToCartInput: React.FC<Props> = (props: Props) => {
  const { quantity, onSubmit, onChange, isInvalid } = useAddToCartInput(props)

  const inputClassNames = classNames(styles.input, {
    [styles.error]: isInvalid,
  })

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        className={inputClassNames}
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
