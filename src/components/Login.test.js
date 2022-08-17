import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Login from './Login';

jest.mock('axios', () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: 'John' },
    }),
  },
}));

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

test('loading should not be rendered', () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
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

test('username input should change', () => {
  render(<Login />);
  const usernameEl = screen.getByPlaceholderText(/username/i);
  const testValue = 'test';

  fireEvent.change(usernameEl, { target: { value: testValue } });
  expect(usernameEl.value).toBe(testValue);
});

test('password input should change', () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  const testValue = 'test';

  fireEvent.change(passwordEl, { target: { value: testValue } });
  expect(passwordEl.value).toBe(testValue);
});

test('button should not be disabled when inputs exist', () => {
  render(<Login />);

  const buttonEl = screen.getByRole('button');
  const usernameEl = screen.getByPlaceholderText(/username/i);
  const passwordEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(usernameEl, { target: { value: testValue } });
  fireEvent.change(passwordEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test('loading should be rendered when clicked', () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  const usernameEl = screen.getByPlaceholderText(/username/i);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  const testValue = 'test';

  fireEvent.change(usernameEl, { target: { value: testValue } });
  fireEvent.change(passwordEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/please wait/i);
});

test('loading should not be rendered after fetching data', async () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  const usernameEl = screen.getByPlaceholderText(/username/i);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  const testValue = 'test';

  fireEvent.change(usernameEl, { target: { value: testValue } });
  fireEvent.change(passwordEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});
