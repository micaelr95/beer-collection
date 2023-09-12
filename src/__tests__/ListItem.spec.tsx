import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { mockBeer } from '@/mocks/beers';
import List from '@/components/List';

describe('ListItem', () => {
  it('renders ListItem component correctly', () => {
    render(<List beers={mockBeer} />);

    expect(screen.getByText('Buzz')).toBeInTheDocument();
    expect(screen.getByText('A Real Bitter Experience.')).toBeInTheDocument();
    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      '/details/eadd4a676ac'
    );
  });
});
