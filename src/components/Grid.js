import React from 'react';
import styles from './grid.module.css';
import Cell from './Cell';

const Grid = () => {

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className={styles.game}>
        <div className={styles.grid}>
          <div className={styles.row}>
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className={styles.row}>
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className={styles.row}>
            <Cell />
            <Cell />
            <Cell />
          </div>
        </div>
      </div>
    </>
  )
}

export default Grid;
