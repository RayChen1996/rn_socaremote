//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import MyHeader from '../../components/_header';
import {useState} from 'react';
import MyBtn from '../../components/_Button';
import MyTextInput from '../../components/_TextInput';
// create a component
const ReaderEdit = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // 控制模态框的显示和隐藏
  const [inputValue, setInputValue] = useState(''); // 存储用户输入的值

  const [keyboardType, setKeyboardType] = useState('default'); //numeric

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
  const handleModalConfirm = () => {
    // 处理模态框中用户输入的值
    console.log('用户输入的值:', inputValue);

    // 隐藏模态框
    setIsModalVisible(false);
  };
  const excuteChg = action => {
    switch (action) {
      case '機號':
        setKeyboardType('numeric'); //default
        break;
      case '名稱':
        setKeyboardType('default');
        break;
      case 'IP':
        setKeyboardType('default');
        break;
      case 'Port':
        setKeyboardType('numeric');
        break;
      case '系統密碼':
        setKeyboardType('numeric');
        break;
      case '開門時間':
        setKeyboardType('numeric');
        break;
      case '蜂鳴器設定':
        break;

      default:
        break;
    }

    setIsModalVisible(true);
  };

  const renderSetting = ({item}) => {
    console.log(item.name);
    return (
      <TouchableOpacity
        onPress={() => {
          excuteChg(item.name);
        }}
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
          <MyBtn style={{flex: 0.1}} buttonText={'確認'} />
        </View>
        <View
          style={{
            flex: 0.11,
          }}></View>
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.8,
              }}>
              <MyTextInput
                autoFocus={true}
                keyboardType={keyboardType}
                onChangeText={''}
              />
            </View>

            <View
              style={{
                flex: 0.2,
              }}></View>

            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                borderRadius: 5,
              }}
              onPress={handleModalConfirm}>
              <Text
                style={{
                  padding: 10,
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: 20,
                  color: '#fff',
                }}>
                確認
              </Text>
            </TouchableOpacity>
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
    width: '90%',
    height: '22%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 5,
  },
});

//make this component available to the app
export default ReaderEdit;
