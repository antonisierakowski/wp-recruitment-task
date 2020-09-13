import React, { useContext } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from "@material-ui/core";
import styles from './styles.module.css';

const MAX_BADGE_VALUE = 99;

export const ShoppingCartIcon: React.FC = () => {
  const { totalNumberOfItems } = useContext(ShoppingCartContext)
  return (
    <Badge
      badgeContent={totalNumberOfItems}
      max={MAX_BADGE_VALUE}
      overlap="circle"
      color="secondary"
    >
      <ShoppingCartOutlinedIcon
        className={styles.icon}
      />
    </Badge>
  )
}
