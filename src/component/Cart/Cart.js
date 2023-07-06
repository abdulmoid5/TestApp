import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const renderItem = ({item}) => (
    <View style={{marginVertical: 10}}>
      <Text style={{fontSize: 16}}>{item.name}</Text>
      <Text>{`Price: $${item.price}`}</Text>
    </View>
  );

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 100,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      <Button
        title="Add to Cart"
        onPress={() => addToCart({id: 1, name: 'Product 1', price: 9.99})}
      />
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Cart;
