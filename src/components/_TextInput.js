import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
const _TextInput = props => {
  const {inputValue, onChangeText, keyboardType, autoFocus} = props;
  return (
    <TextInput
      autoFocus={autoFocus}
      keyboardType={keyboardType}
      style={styles.input}
      onChangeText={onChangeText}
      value={inputValue}
    />
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    color: '#000',
    width: 150,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
  },
});
export default _TextInput;
