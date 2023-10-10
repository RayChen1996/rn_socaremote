import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const RadioButtonItem = ({label}) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={selected ? styles.selectedContainer : styles.container}>
      <View style={selected ? styles.selectedRadioCircle : styles.radioCircle}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text
        style={{
          color: '#000',
          fontWeight: '900',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'lightblue', // 选中状态的背景色
    padding: 5,
    borderRadius: 5,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selectedRadioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'green', // 选中状态的圆圈颜色
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default RadioButtonItem;
