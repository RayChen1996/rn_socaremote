import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import MyBtn from '../components/_Button';

import * as StorageHelper from '../helps/Store';
const AddReader = ({navigation}) => {
  const [rNo, setRNo] = useState(1);
  const [rName, setRName] = useState('預設卡機');
  const [rIP, setIP] = useState('192.168.10.89');
  const [rPort, setPort] = useState(4444);
  const [rSysPwd, setSysPwd] = useState(567890);
  const [rOpenTime, setROpenTime] = useState(0x01);
  const [rBeep, setRBeep] = useState(0x01);
  const [readers, setReaders] = useState([]);
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

  function generateRandomHex() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

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

  useEffect(() => {
    // StorageHelper.removeData('Readers');

    StorageHelper.getData('Readers')
      .then(a => {
        if (a != undefined) {
          try {
            let PaeseA = JSON.parse(a);
            setReaders(PaeseA);
          } catch (e) {
            console.log(' parse Err');
          }
        } else {
          let arr = [];
          let Reader = {
            No: 1,
            Name: 'ST-580U',
            IP: '192.168.10.83',
            Port: 4447,
            TimeOut: 3,
          };
        }
      })
      .catch(error => {});
  }, []);

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
          <MyBtn
            onPress={() => {
              console.log('add reader ');
              const randomHex = generateRandomHex();
              console.log(randomHex);

              console.log(readers);
              let Reader = {
                id: randomHex,
                no: rNo,
                name: rName,
                ip: rIP,
                port: rPort,
                sysPwd: rSysPwd,
                openDoorTime: rOpenTime,
                Beep: rBeep,
              };
              readers.push(Reader);
              StorageHelper.storeData('Readers', JSON.stringify(readers));
            }}
            style={{flex: 0.1}}
            buttonText={'確認'}
          />
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
