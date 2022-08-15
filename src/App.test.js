import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole('listitem');
  // expect(listItems).toHaveLength(3);
  // expect(listItems.length).toBe(3);
  expect(listItems.length).toEqual(3);
});

test('renders element with id mytestid', () => {
  render(<App />);
  const idElement = screen.getByTestId('mytestid');
  expect(idElement).toBeInTheDocument();
});

test('sum should be 9', () => {
  render(<App />);
  const title = screen.getByTitle('sum');
  expect(title.textContent).toBe('9');
});
