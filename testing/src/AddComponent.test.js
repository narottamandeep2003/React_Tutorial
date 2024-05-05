import React from 'react';
import { render } from '@testing-library/react';
import AddComponent from './AddComponent';
//
describe('AddComponent', () => {
  it('should correctly add two numbers', () => {
    const { getByText } = render(<AddComponent a={2} b={3} />);
    const result = getByText('2 + 3 = 5');
    expect(result).toBeInTheDocument();
  });

  it('should handle negative numbers', () => {
    const { getByText } = render(<AddComponent a={-2} b={3} />);
    const result = getByText('-2 + 3 = 1');
    expect(result).toBeInTheDocument();
  });

  it('should handle zero', () => {
    const { getByText } = render(<AddComponent a={0} b={3} />);
    const result = getByText('0 + 3 = 3');
    expect(result).toBeInTheDocument();
  });
});