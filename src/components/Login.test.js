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

test('button should be rendered', () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeInTheDocument();
});

test('username input should be empty', () => {
  render(<Login />);
  const usernameEl = screen.getByPlaceholderText(/username/i);
  expect(usernameEl.value).toBe('');
});

test('password input should be empty', () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  expect(passwordEl.value).toBe('');
});

test('button should be disabled', () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeDisabled();
});

test('error message should not be visible', () => {
  render(<Login />);
  const errorEl = screen.getByTestId('error');
  expect(errorEl).not.toBeVisible();
});
