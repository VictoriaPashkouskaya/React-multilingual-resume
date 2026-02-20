import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App routing flow', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('shows language selection on root route', () => {
    window.history.pushState({}, '', '/');

    render(<App />);

    expect(screen.getByText(/cv viktoria/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
  });

  test('navigates to resume and persists selected language', async () => {
    window.history.pushState({}, '', '/');

    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: /english/i }));

    expect(window.location.pathname).toBe('/resume');
    expect(localStorage.getItem('language')).toBe('en');
    expect(screen.getByText(/victoria pashkouskaya/i)).toBeInTheDocument();
  });
});
