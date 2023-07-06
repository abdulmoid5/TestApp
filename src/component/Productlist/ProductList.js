import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';

const ProductList = ({products}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Product List</Text>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 16}}>{item.name}</Text>
              <Text>{`Price: $${item.price}`}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductList;
