import { render, screen } from '@testing-library/react';
import Login from './Login';

test('username input should be rendered', () => {
  render(<Login />);
  const usernameEl = screen.getByPlaceholderText(/username/i);
  expect(usernameEl).toBeInTheDocument();
});

test('password input should be rendered', () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  expect(passwordEl).toBeInTheDocument();
});

test('button input should be rendered', () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeInTheDocument();
});
