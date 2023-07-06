import React from 'react';
import {render} from '@testing-library/react-native';
import ProductList from './ProductList';

describe('ProductList component', () => {
  const products = [
    {id: 1, name: 'Product 1', price: 9.99},
    {id: 2, name: 'Product 2', price: 19.99},
    {id: 3, name: 'Product 3', price: 29.99},
  ];

  test('renders the product list correctly', () => {
    const {getByText} = render(<ProductList products={products} />);

    const productListTitle = getByText('Product List');
    expect(productListTitle).toBeDefined();

    products.forEach(product => {
      const productName = getByText(product.name);
      const productPrice = getByText(`Price: $${product.price}`);
      expect(productName).toBeDefined();
      expect(productPrice).toBeDefined();
    });
  });
});
