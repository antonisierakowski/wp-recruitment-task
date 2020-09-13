import React from 'react';
import { AddToCartInput } from '../AddToCartInput';
import styles from './styles.module.css';
import classNames from 'classnames';

type Props = {
  id: string;
  name: string;
  price: string | undefined;
  manufacturers: string[];
  isInStock: boolean;
};

export const ProductTile: React.FC<Props> = (props: Props) => (
  <div className={styles.productTile}>
    <div>
      <h3 className={styles.productName}>{props.name}</h3>
      {renderManufacturers(props)}
    </div>
    <div className={styles.priceSection}>
      {renderPrice(props)}
      {props.isInStock && <AddToCartInput id={props.id} />}
    </div>
  </div>
);

function renderManufacturers(props: Props): React.ReactElement {
  return (
    <ul className={styles.manufacturersList}>
      {props.manufacturers.map(manufacturer => (
        <li className={styles.manufacturerListItem} key={manufacturer}>
          {manufacturer}
        </li>
      ))}
    </ul>
  );
}

function renderPrice(props: Props): React.ReactElement {
  const priceClassNames = classNames(styles.price, {
    [styles.outOfStock]: !props.isInStock,
  });

  return (
    <span className={priceClassNames}>
      {props.isInStock ? `${props.price} cred.` : 'Out of stock'}
    </span>
  );
}
