import React from 'react';
import {View, Text} from 'react-native';

const Greeting = ({name}) => {
  return (
    <View>
      <Text>{`Hello, ${name}!`}</Text>
    </View>
  );
};

export default Greeting;
