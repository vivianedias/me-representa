import React from "react";
import styles from './styles.module.css'

const Mosaic = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Mosaic;
