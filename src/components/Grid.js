import React, {useState} from 'react';
import styles from './grid.module.css';
import Cell from './Cell';

const Grid = () => {

	const [cells, setCells] = useState(Array(9).fill(''));


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className={styles.game}>
        <div className={styles.grid}>
          <div className={styles.row}>
            <Cell cellNum={0} cells={cells} />
            <Cell cellNum={1} cells={cells} />
            <Cell cellNum={2} cells={cells} />
          </div>
          <div className={styles.row}>
            <Cell cellNum={3} cells={cells} />
            <Cell cellNum={4} cells={cells} />
            <Cell cellNum={5} cells={cells} />
          </div>
          <div className={styles.row}>
            <Cell cellNum={6} cells={cells} />
            <Cell cellNum={7} cells={cells} />
            <Cell cellNum={8} cells={cells} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Grid;
