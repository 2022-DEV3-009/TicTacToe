import React, {useState} from 'react';
import styles from './grid.module.css';
import Cell from './Cell';
import WinningMoves from './utils/WinningMoves';

const Grid = () => {

	const [player, setPlayer] = useState('x');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();

	const checkForWinner = (squares) => {
			WinningMoves.forEach((pattern) => {
				if (
					squares[pattern[0]] !== '' ||
					squares[pattern[1]] !== '' ||
					squares[pattern[2]] !== ''
				) {
					if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
          ) {
            setWinner(squares[pattern[0]]);
          }
				}
			});
	};

	const handleClick = (cellNum) => () => {
    let squares = [...cells];
    if (player === 'x') {     // if it's x's turn
      squares[cellNum] = 'x';
      setPlayer('o');
    } else {    // if it's o's turn
      squares[cellNum] = 'o';
      setPlayer('x');
    }
    checkForWinner(squares);
    setCells(squares);
	};

  const renderMessage = () => {
      if (winner) {
      return (
      <div>
        <p data-testid="status">{winner} win!</p>
      </div>
      )
    } else {
      return (
        <p data-testid="nextPlayer">Next player : {player}</p>
      )}
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className={styles.game}>
        {renderMessage()}
        <div className={styles.grid}>
          <div className={styles.row}>
            <Cell cellNum={0} handleClick={handleClick} cells={cells} />
            <Cell cellNum={1} handleClick={handleClick} cells={cells} />
            <Cell cellNum={2} handleClick={handleClick} cells={cells} />
          </div>
          <div className={styles.row}>
            <Cell cellNum={3} handleClick={handleClick} cells={cells} />
            <Cell cellNum={4} handleClick={handleClick} cells={cells} />
            <Cell cellNum={5} handleClick={handleClick} cells={cells} />
          </div>
          <div className={styles.row}>
            <Cell cellNum={6} handleClick={handleClick} cells={cells} />
            <Cell cellNum={7} handleClick={handleClick} cells={cells} />
            <Cell cellNum={8} handleClick={handleClick} cells={cells} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Grid;
