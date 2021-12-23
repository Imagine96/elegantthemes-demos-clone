import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const main = screen.getAllByRole('main')
  expect(main).toHaveLength(1)
  expect(main[0]).toBeInTheDocument()
});
