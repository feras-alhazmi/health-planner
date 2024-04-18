/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Page from '../page';

test('renders Page component without crashing', () => {
  render(<Page />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
  ;
});