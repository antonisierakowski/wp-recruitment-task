import React from "react";
import { CircularProgress } from "@material-ui/core";
import styles from './styles.module.css'

export const LoadingIndicator: React.FC = () => (
  <div className={styles.loading}>
    <CircularProgress size="5rem" />
  </div>

)
