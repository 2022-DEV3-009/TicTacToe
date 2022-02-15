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
  throw new Error('Not implemented');
});

it ('should be O as winner', () => {
  throw new Error('Not implemented');
});


it('should be a draw', () => {
  throw new Error('Not implemented');
});


it('should not be allowed to click on a filled cell', () => {
  throw new Error('Not implemented');
});


it('should not be allowed to click after win', () => {
  throw new Error('Not implemented');
});


it('should not be allowed to click after a draw', () => {
  throw new Error('Not implemented');
});
