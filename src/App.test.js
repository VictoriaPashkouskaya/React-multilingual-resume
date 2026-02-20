import { render, screen } from '@testing-library/react';
import App from './App';

test('renders language selection page', () => {
  render(<App />);
  expect(screen.getByText(/cv viktoria/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
});
