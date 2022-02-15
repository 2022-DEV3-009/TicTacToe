import { render, screen, fireEvent } from '@testing-library/react'
import Grid from '../../components/Grid';

it('should display grid with initial cells state', () => {
  render (<Grid />);

  const cells = screen.queryAllByTestId('cell')
  expect(cells.length).toBe(9)
  expect(cells[0].textContent).toBe('')
  expect(cells[1].textContent).toBe('')
  expect(cells[2].textContent).toBe('')
  expect(cells[3].textContent).toBe('')
  expect(cells[4].textContent).toBe('')
  expect(cells[5].textContent).toBe('')
  expect(cells[6].textContent).toBe('')
  expect(cells[7].textContent).toBe('')
  expect(cells[8].textContent).toBe('')
});

it('should display X at the first click', () => {
  render (<Grid />);

  const cells = screen.queryAllByTestId('cell')
  fireEvent.click(cells[0])

  expect(cells[0].textContent).toBe('x')
});

it('should switch between X and O at each click', () => {
  render(<Grid />)

  const cells = screen.queryAllByTestId('cell')

  expect(screen.getByTestId('nextPlayer').textContent).toBe('Next player : x');

  fireEvent.click(cells[0])
  expect(screen.getByTestId('nextPlayer').textContent).toBe('Next player : o');

  fireEvent.click(cells[1])
  expect(screen.getByTestId('nextPlayer').textContent).toBe('Next player : x');

  fireEvent.click(cells[6])
  expect(screen.getByTestId('nextPlayer').textContent).toBe('Next player : o');

});

it ('should be X as winner', () => {
  render(<Grid />);

  const cells = screen.queryAllByTestId('cell')

  fireEvent.click(cells[0])
  fireEvent.click(cells[1])
  fireEvent.click(cells[4])
  fireEvent.click(cells[2])
  fireEvent.click(cells[8])

  const status = screen.queryByTestId('status');
  expect(status.textContent).toBe('x win!');
});

it ('should be O as winner', () => {
  render(<Grid />);

  const cells = screen.queryAllByTestId('cell')

  fireEvent.click(cells[0])
  fireEvent.click(cells[3])
  fireEvent.click(cells[6])
  fireEvent.click(cells[4])
  fireEvent.click(cells[7])
  fireEvent.click(cells[5])

  const status = screen.queryByTestId('status');
  expect(status.textContent).toBe('o win!');
});


it('should be a draw', () => {
  render(<Grid />)

  const cells = screen.queryAllByTestId('cell')

  fireEvent.click(cells[0])
  fireEvent.click(cells[4])
  fireEvent.click(cells[8])
  fireEvent.click(cells[6])
  fireEvent.click(cells[2])
  fireEvent.click(cells[5])
  fireEvent.click(cells[3])
  fireEvent.click(cells[1])
  fireEvent.click(cells[7])

  const status = screen.queryByTestId('statusDraw');
  expect(status.textContent).toBe("It's a draw!");
});


it('should not be allowed to click on a filled cell', () => {
  render(<Grid />)

  const cells = screen.queryAllByTestId('cell')
  fireEvent.click(cells[1])
  expect(cells[1].textContent).toBe('x')
  fireEvent.click(cells[1])
  expect(cells[1].textContent).toBe('x')
});


it('should not be allowed to click after win', () => {
  render(<Grid />)

  const cells = screen.queryAllByTestId('cell')

  fireEvent.click(cells[0])
  fireEvent.click(cells[1])
  fireEvent.click(cells[4])
  fireEvent.click(cells[2])
  fireEvent.click(cells[8])

  const status = screen.getByTestId('status');
  expect(status?.textContent).toBe('x win!');

  expect(cells[5].textContent).toBe('')

  fireEvent.click(cells[5])

  expect(cells[5].textContent).toBe('')
});


it('should not be allowed to click after a draw', () => {
  render(<Grid />)

  const cells = screen.queryAllByTestId('cell')

  fireEvent.click(cells[0])
  fireEvent.click(cells[4])
  fireEvent.click(cells[8])
  fireEvent.click(cells[6])
  fireEvent.click(cells[2])
  fireEvent.click(cells[5])
  fireEvent.click(cells[3])
  fireEvent.click(cells[1])
  fireEvent.click(cells[7])

  const status = screen.getByTestId('statusDraw');
  expect(status?.textContent).toBe("It's a draw!");

  expect(cells[0].textContent).toBe('x')

  fireEvent.click(cells[0])

  expect(cells[0].textContent).toBe('x')
});
