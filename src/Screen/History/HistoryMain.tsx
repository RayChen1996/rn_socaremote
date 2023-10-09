//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Rdo from '../../components/_RadioButton';
import MyBtn from '../../components/_Button';
import MyHeader from '../../components/_header';

import {useState} from 'react';
// create a component
const HistoryMain = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');
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

      Card: '0000666667',
      Name: 'AAA',
      StateCode: 0x00,
      State: '電腦重設時間',
      Date: '2023-04-18',
      Time: '09:32:43',
    },
    {
      id: 1,

      Card: '0000666667',
      Name: 'BBB',
      StateCode: 0x00,
      State: '進入',
      Date: '2023-04-18',
      Time: '09:32:43',
    },
  ]);

  const renderSetting = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 8,
          margin: 5,
          borderRadius: 5,
          borderWidth: 1,
        }}>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              flex: 0.333,
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              {item.Card}
            </Text>
          </View>
          <View
            style={{
              flex: 0.333,
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              {item.Date}
            </Text>
          </View>
          <View
            style={{
              flex: 0.333,
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              {item.Time}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flex: 0.333,
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              {item.State}
            </Text>
          </View>
          <View
            style={{
              flex: 0.333,
            }}></View>
          <View
            style={{
              flex: 0.333,
            }}></View>
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
    navigation.pop();
  };

  const handleClickMoreBtn = () => {
    console.log('press more btn ');
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
      <MyHeader
        isShowMoreBtn={true}
        isShowBackBtn={true}
        onPress={handleClickBtn}
        onMoreBtnPress={handleClickMoreBtn}
        titleText={'歷史紀錄'}
      />

      <View
        style={{
          flex: 0.88,
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
            flex: 0.1,
          }}></View>

        <View
          style={{
            flex: 0.8,
          }}>
          <MyBtn buttonText={'同步歷史紀錄'} />
        </View>

        <View
          style={{
            flex: 0.1,
          }}></View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                flex: 0.1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.05}}></View>
              <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
                歷史紀錄查詢
              </Text>
            </View>
            <View
              style={{
                flex: 0.05,
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
            <View
              style={{flex: 0.05, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
                開始日期
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                flex: 0.05,
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
            <View
              style={{flex: 0.05, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
                結束日期
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
                placeholder="00:00"
              />
            </View>
            <View
              style={{
                flex: 0.05,
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
            <View
              style={{flex: 0.05, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
                查詢目標
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
                placeholder="00:00"
              />
            </View>
            <View
              style={{
                flex: 0.05,
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>
            <View
              style={{flex: 0.05, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
                排列方式
              </Text>

              <Rdo label={'遞增'} />

              <Rdo label={'遞增'} />
            </View>
            <View
              style={{
                flex: 0.34,
                flexDirection: 'row',
                alignItems: 'center',
              }}></View>

            <View
              style={{
                flex: 0.15,
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
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: 'green',
                  }}>
                  <Text
                    style={{
                      padding: 15,
                      textAlign: 'center',
                      color: '#000',
                      fontWeight: '900',
                      fontSize: 20,
                    }}>
                    取消
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 0.465,
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'green',
                  }}>
                  <Text
                    style={{
                      padding: 15,
                      textAlign: 'center',
                      color: '#000',
                      fontWeight: '900',
                      fontSize: 20,
                    }}>
                    查詢
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 0.01,
                }}></View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    padding: 8,
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '75%',
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
  optionText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 20,
  },
  input: {
    color: '#ccc',
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

//make this component available to the app
export default HistoryMain;
