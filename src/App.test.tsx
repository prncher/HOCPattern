import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Products', () => {
  const { getByText } = render(<App />);
  const prodElement = getByText(/Products/i);
  expect(prodElement).toBeInTheDocument();
});
