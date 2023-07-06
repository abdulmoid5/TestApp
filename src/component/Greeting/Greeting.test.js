import React from 'react';
import {render} from '@testing-library/react-native';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders a greeting message with the provided name', () => {
    const name = 'John';
    const {getByText} = render(<Greeting name={name} />);
    const greetingText = getByText(`Hello, ${name}!`);
    expect(greetingText).toBeDefined();
  });
});
