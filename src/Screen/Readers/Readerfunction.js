//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as StorageHelper from '../../helps/Store';
import MyHeader from '../../components/_header';
import Rdo from '../../components/_RadioButton';
import MyBtn from '../../components/_Button';
import {useState} from 'react';
// create a component
const ReaderFunc = ({navigation, route}) => {
  const {itemId} = route.params;

  const [number, onChangeNumber] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
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

  const handleDelete = () => {
    Alert.alert(
      '確定刪除',
      '您確定要刪除嗎？',
      [
        {
          text: '取消',
          onPress: () => console.log('取消删除'),
          style: 'cancel',
        },
        {
          text: '删除',
          onPress: () => {
            // 在这里执行删除操作
            //itemId
            const idToDelete = itemId;
            StorageHelper.getData('Readers')
              .then(res => {
                console.log('res', res);
                let jsonArray = JSON.parse(res);

                const filteredArray = jsonArray.filter(
                  item => item.id !== idToDelete,
                );

                console.log(filteredArray);
                StorageHelper.storeData(
                  'Readers',
                  JSON.stringify(filteredArray),
                );

                navigation.pop();
              })
              .catch(() => {});
          },
        },
      ],
      {cancelable: false},
    );
  };

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
        setModalVisible(true);
        break;
      case '歷史紀錄':
        navigation.navigate('HistoryMain');
        break;
      case '樓層控制':
        navigation.navigate('EditReaderFloor');
        break;

      case '編輯':
        navigation.navigate('EditReader');
        break;
      case '刪除':
        handleDelete();
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
      {/**    
    <Text>接收到的ID：{itemId}</Text>
     */}

      <MyHeader
        onPress={() => {
          navigation.pop();
        }}
        isShowBackBtn={true}
        titleText={'讀卡機'}
      />

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
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  fontWeight: '900',
                }}>
                啟用狀態
              </Text>
              <View style={{flex: 0.25}}>
                <Rdo label={'開啟'} />
              </View>
              <View style={{flex: 0.25}}>
                <Rdo label={'關閉'} />
              </View>
            </View>
            <View
              style={{flex: 0.1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 0.05}}></View>
              <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
                星期
              </Text>
              <View style={{flex: 0.1}}></View>
            </View>

            <View
              style={{
                flex: 0.1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '900',
                  }}>
                  日
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '900',
                  }}>
                  一
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '900',
                  }}>
                  二
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '900',
                  }}>
                  三
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '900',
                  }}>
                  四
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '900',
                  }}>
                  五
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#000',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '900',
                  }}>
                  六
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{flex: 0.1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 0.05}}></View>
              <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
                開始日期
              </Text>
              <View style={{flex: 0.1}}></View>
            </View>

            <View
              style={{flex: 0.05, flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
              />
            </View>

            <View
              style={{flex: 0.1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 0.05}}></View>
              <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
                結束日期
              </Text>
              <View style={{flex: 0.1}}></View>
            </View>

            <View
              style={{flex: 0.05, flexDirection: 'row', alignItems: 'center'}}>
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
                flex: 0.3,
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
                <MyBtn
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  buttonText={'取消'}
                />
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
    width: '85%',
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
export default ReaderFunc;
