import React from 'react';
import styles from './cell.module.css';

  const Cell = ({ cellNum, handleClick, cells }) => {
		return <button className={styles.cell} data-testid="cell" onClick={handleClick(cellNum)}>{cells[cellNum]}</button>;
	};

  export default Cell;
