/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import ParticipantsCatalog from '../../components/features/ParticipantsCatalog';

describe('ParticipantsCatalog', () => {
  it('renders the component without errors', () => {
    render(<ParticipantsCatalog />);
  });

  it('displays the filtered users correctly', () => {
    const { getByText } = render(<ParticipantsCatalog />);

    // Assert that the filtered user "John Doe" is displayed
    expect(getByText('John Doe'))?.toBeInTheDocument();
  });
});