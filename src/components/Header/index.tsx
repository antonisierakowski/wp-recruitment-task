import React from 'react';
import { ShoppingCartIcon } from './ShoppingCartIcon';
import styles from './styles.module.css';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <span>WP Recruitment Task</span>
    <ShoppingCartIcon />
  </header>
);
