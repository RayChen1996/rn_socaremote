//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import MyHeader from '../../components/_header';
import {useState} from 'react';
// create a component
const ReaderFunc = ({navigation}) => {
  const [SettingData, setSettingData] = useState([
    {
      id: 0,
      name: '機器資訊',
      val: 1,
      src: require('../../assets/readerinfo.png'),
    },
    {
      id: 1,
      name: '使用者清單',
      val: '預設名稱',
      src: require('../../assets/userlist.png'),
    },
    {
      id: 2,
      name: '不上鎖時段',
      val: '192.168.10.89',
      src: require('../../assets/unlock.png'),
    },
    {
      id: 3,
      name: '歷史紀錄',
      val: 4444,
      src: require('../../assets/readrecord.png'),
    },
    {
      id: 4,
      name: '樓層控制',
      val: 567890,
      src: require('../../assets/se18.png'),
    },
    {
      id: 5,
      name: '編輯',
      val: 3,
      src: require('../../assets/editreader.png'),
    },
    {
      id: 6,
      name: '刪除',
      val: '大',
      src: require('../../assets/deletereader.png'),
    },
  ]);
  const clickFunc = evtName => {
    switch (evtName) {
      case '機器資訊':
        break;
      case '使用者清單':
        navigation.navigate('CardHome');
        break;
      case '機器資訊':
        break;
      case '不上鎖時段':
        break;
      case '歷史紀錄':
        navigation.navigate('HistoryMain');
        break;
      case '樓層控制':
        navigation.navigate('EditReaderFloor');
        break;

      case '編輯':
        navigation.navigate('CardHome');
        break;
      case '刪除':
        break;

      default:
        break;
    }
  };

  const renderSetting = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          clickFunc(item.name);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 5,
          margin: 5,

          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}>
        <View
          style={{
            flex: 0.06,
            marginLeft: 15,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
            }}
            source={item.src}
          />
        </View>

        <View
          style={{
            flex: 0.8,
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'left',
              fontWeight: '900',
              fontSize: 24,
            }}>
            {item.name}
          </Text>
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
      <MyHeader titleText={'讀卡機'} />

      <View
        style={{
          flex: 0.8,
        }}>
        <FlatList
          data={SettingData}
          renderItem={renderSetting}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ReaderFunc;
