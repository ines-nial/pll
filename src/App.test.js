// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders optimization title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Optimisation de Distribution des Médicaments/i);
  expect(titleElement).toBeInTheDocument();
});