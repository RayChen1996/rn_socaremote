import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
const _deleteBtn = props => {
  const {onPress, buttonText} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'red',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'red',
      }}>
      <Text
        style={{
          fontSize: 20,
          padding: 15,
          color: '#fff',
          fontWeight: '900',
          textAlign: 'center',
        }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default _deleteBtn;
