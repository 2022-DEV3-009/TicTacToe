import React from 'react';
import styles from './cell.module.css';

  const Cell = ({ cellNum, cells }) => {
		return <button className={styles.cell} data-testid="cell">{cells[cellNum]}</button>;
	};

  export default Cell;
