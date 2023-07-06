import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Cart from './Cart';

describe('Cart component', () => {
  test('adds a product to the cart', () => {
    const {getByText} = render(<Cart />);
    const addToCartButton = getByText('Add to Cart');
    const productName = 'Product 1';
    const productPrice = 'Price: $9.99';

    fireEvent.press(addToCartButton);

    const addedProductName = getByText(productName);
    const addedProductPrice = getByText(productPrice);

    expect(addedProductName).toBeDefined();
    expect(addedProductPrice).toBeDefined();
  });
});
