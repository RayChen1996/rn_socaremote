//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import MyHeader from '../../components/_header';
import MyBtn from '../../components/_Button';
import {useState} from 'react';
// create a component
const FloorSet = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {key: 'adduser', label: '新增使用者'},
    {key: 'copyreader', label: '從其他讀卡機複製'},
    {key: 'deletAll', label: '刪除所有使用者'},
    {key: 'cancel', label: '取消'},
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleAction(item.key)}>
      <Text style={styles.item}>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleAction = action => {
    // 执行相应的操作

    switch (action) {
      case 'adduser':
        navigation.navigate('AddCard');
        break;
      case 'copyreader':
        navigation.navigate('CardHome');
        break;
      case 'deletAll':
        break;
      case 'cancel':
        break;
      default:
        break;
    }
    setModalVisible(false); // 关闭对话框
  };

  const [SettingData, setSettingData] = useState([
    {
      id: 0,
      name: 'AAA',
      val: '0000666666',
      Type: 0x01,
    },
    {
      id: 1,
      name: 'BBB',
      val: '0000666667',
      Type: 0x00,
    },
    {
      id: 2,
      name: 'CCC',
      val: '0000666668',
      Type: 0x01,
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
              color: 'black',
            }}>
            {item.val}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const openDoor = () => {
    // 处理开门逻辑
    console.log('开门');
  };

  const emergencyOpenDoor = () => {
    // 处理緊急開門逻辑
    console.log('緊急開門');
  };

  const output2 = () => {
    // 处理接點2輸出逻辑
    console.log('接點2輸出');
  };
  const handleClickBtn = () => {
    setModalVisible(true);
  };

  const closeDoor = () => {
    // 处理關門逻辑
    console.log('關門');
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <MyHeader onPress={handleClickBtn} titleText={'選擇樓層'} />

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

      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center',

          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 0.01,
          }}></View>

        <View
          style={{
            flex: 0.465,
          }}>
          <MyBtn buttonText={'樓層全選'} />
        </View>
        <View
          style={{
            flex: 0.05,
          }}></View>
        <View
          style={{
            flex: 0.465,
          }}>
          <MyBtn buttonText={'確定傳送'} />
        </View>

        <View
          style={{
            flex: 0.01,
          }}></View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>請選擇動作</Text>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.key}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 16,
    color: '#000',
  },
  item: {
    fontSize: 16,
    padding: 8,
    color: '#000',
  },
});

//make this component available to the app
export default FloorSet;
