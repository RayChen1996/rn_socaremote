import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, Image} from 'react-native';
import MyBtn from '../components/_Button';
import socaLogo from '../assets/soca.png';

const _header2 = props => {
  return (
    <View
      style={{
        flex: 0.1,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        flexDirection: 'row',
      }}>
      <View style={{flex: 0.333}}></View>
      <View
        style={{
          flex: 0.333,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* 
      
         <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontWeight: '900',
          }}>
          {props.titleText}
        </Text>
      
       */}

        <Image
          style={{
            width: 250,
            height: 90,
            resizeMode: 'contain',
          }}
          source={socaLogo}
        />
      </View>
      <View
        style={{flex: 0.333, justifyContent: 'center', alignItems: 'center'}}>
        <MyBtn buttonText={props.titleText} />
      </View>
    </View>
  );
};

export default _header2;
