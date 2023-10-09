//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import MyHeader from '../../components/_header';
import {useState} from 'react';
import MyBtn from '../../components/_Button';
import Rdo from '../../components/_RadioButton';
// create a component
const ReaderCopy = ({navigation}) => {
  const [SettingData, setSettingData] = useState([
    {
      id: 0,
      name: '預設名稱',
      CardCount: 1,
    },
    {
      id: 1,
      name: '名稱',
      CardCount: 15,
    },
  ]);

  const renderSetting = ({item}) => {
    console.log(item.name);
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',

          alignItems: 'center',
          padding: 15,
          margin: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'flex-start',
          }}>
          <Rdo />
        </View>
        <View
          style={{
            flex: 0.8,
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '900',
              }}>
              {item.name}
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: 'black',
                fontWeight: '900',
              }}>
              使用者清單共{item.CardCount}筆
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <MyHeader
        onPress={() => {
          navigation.pop();
        }}
        isShowBackBtn={true}
        titleText={'讀卡機'}
      />

      <View
        style={{
          flex: 0.9,
        }}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 24,
            marginLeft: 20,
            marginTop: 10,
            color: '#000',
          }}>
          選擇來源
        </Text>
        <FlatList
          data={SettingData}
          renderItem={renderSetting}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 0.11,
          }}></View>
        <View
          style={{
            flex: 0.77,
          }}>
          <MyBtn style={{flex: 0.1}} buttonText={'複製清單'} />
        </View>
        <View
          style={{
            flex: 0.11,
          }}></View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ReaderCopy;
