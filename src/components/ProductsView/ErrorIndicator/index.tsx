import React from "react";
import styles from './styles.module.css';

export const ErrorIndicator: React.FC = () => (
  <div className={styles.error}><h3>There was an error fetching data. Try to reloading the page.</h3></div>
)
