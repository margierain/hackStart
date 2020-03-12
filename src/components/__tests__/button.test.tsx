import React from 'react';
import { render } from '@testing-library/react';
import Button from 'components/button/Button';

describe('Sample Button', () => {
  it('should render the button properly with the text value', () => {
    const { getByText } = render(<Button />);
    expect(getByText('Color Button')).not.toBe(null);
  });
});
