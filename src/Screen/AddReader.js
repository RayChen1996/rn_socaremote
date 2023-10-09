import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import MyBtn from '../components/_Button';
import {useState} from 'react';

const AddReader = ({navigation}) => {
  const [SettingData, setSettingData] = useState([
    {
      id: 0,
      name: '機號',
      val: 1,
    },
    {
      id: 1,
      name: '名稱',
      val: '預設名稱',
    },
    {
      id: 2,
      name: 'IP',
      val: '192.168.10.89',
    },
    {
      id: 3,
      name: 'Port',
      val: 4444,
    },
    {
      id: 4,
      name: '系統密碼',
      val: 567890,
    },
    {
      id: 5,
      name: '開門時間',
      val: 3,
    },
    {
      id: 6,
      name: '蜂鳴器設定',
      val: '大',
    },
  ]);

  const renderSetting = ({item}) => {
    console.log(item.name);
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 15,
          margin: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}>
        <View
          style={{
            flex: 0.5,
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
        <View
          style={{
            flex: 0.5,

            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: '#ccc',
              fontWeight: '900',
            }}>
            {item.val}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          flex: 0.9,
        }}>
        <FlatList
          style={{
            height: '100%',
          }}
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
          <MyBtn style={{flex: 0.1}} buttonText={'確認'} />
        </View>
        <View
          style={{
            flex: 0.11,
          }}></View>
      </View>
    </View>
  );
};

export default AddReader;
