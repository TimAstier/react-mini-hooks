/* eslint-disable react/prop-types */

import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import {useInput} from '../.';

const Input = (props) => (
  <input
    type="text"
    value={props.value}
    onChange={props.handleChange}
    data-testid="test-input"
  />
);

const MyComponent = () => {
  const [value, handleChange] = useInput('');
  return <Input value={value} handleChange={handleChange} />;
};

describe('useInput', () => {
  test('can be used with a controlled input', () => {
    const {getByTestId} = render(<MyComponent />);
    const input = getByTestId('test-input');
    expect(input).toHaveAttribute('value', '');
  });
  test('changes the value of a controlled input', () => {
    const {getByTestId} = render(<MyComponent />);
    const input = getByTestId('test-input');
    fireEvent.change(input, {target: {value: 'Hello!'}});
    expect(input).toHaveAttribute('value', 'Hello!');
  });
});
