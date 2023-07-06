import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Counter from './Counter';

describe('Counter component', () => {
  test('renders initial count', () => {
    const {getByText} = render(<Counter />);
    const countText = getByText('Count: 0');
    expect(countText).toBeDefined();
  });

  test('increments count on button press', () => {
    const {getByText} = render(<Counter />);
    const incrementButton = getByText('Increment');
    const countText = getByText('Count: 0');

    fireEvent.press(incrementButton);
    const newCount = countText.props.children[1];
    expect(newCount).toBe(1);
  });

  test('decrements count on button press', () => {
    const {getByText} = render(<Counter />);
    const decrementButton = getByText('Decrement');
    const countText = getByText('Count: 0');

    fireEvent.press(decrementButton);
    const newCount = countText.props.children[1];
    expect(newCount).toBe(-1);
  });
});
