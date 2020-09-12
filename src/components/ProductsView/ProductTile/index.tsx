import React from "react";
import { AddToCartInput } from "../AddToCartInput";

type Props = {
  id: string,
  name: string,
  price: string | undefined,
  manufacturers: string[],
  isInStock: boolean,
}

export const ProductTile: React.FC<Props> = (props: Props) => (
  <div style={{border: '1px solid black'}}>
    <p>{props.name}</p>
    {renderManufacturers(props)}
    {renderPrice(props)}
    {props.isInStock && <AddToCartInput id={props.id} />}
  </div>
)

function renderManufacturers(props: Props): React.ReactElement[] {
  return props.manufacturers.map(manufacturer => (
    <p key={manufacturer}>{manufacturer}</p>
  ));
}

function renderPrice(props: Props): React.ReactElement {
  return (
    <p>{props.isInStock ? `${props.price} credits` : 'Out of stock'}</p>
  )
}
