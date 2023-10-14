import React, {useState, useEffect} from 'react';
import * as StorageHelper from '../../helps/Store';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Alert,
  Modal,
  Platform,
  Share,
  Linking,
  PermissionsAndroid,
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';
import 'react-native-gesture-handler';
import MyHeader from '../../components/_header';
import MyBtn from '../../components/_Button';
import {useFocusEffect} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import img580 from '../../assets/st580.png';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import unlocak from '../../assets/unlock.png';
import {createStackNavigator} from '@react-navigation/stack';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Stack = createStackNavigator();
import * as Comm from '../../socket/comm';
const Readers = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const contentToShare = '这是要分享的内容。';
  const data = [
    {key: 'openDoor', label: '開門'},
    {key: 'emergencyOpenDoor', label: '緊急開門'},
    {key: 'output2', label: '接點2輸出'},
    {key: 'closeDoor', label: '關門'},
  ];
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const checkStoragePermission = async () => {
    const readPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );

    if (readPermission === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You have permission to read external storage');
    } else {
      console.log('You do not have permission to read external storage');
      // 提供給使用者的說明和導引，以便他們手動啟用權限
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        // PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      console.log(granted);

      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('You can access storage');
      } else {
        console.log('Storage permission denied');
        checkStoragePermission();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // 检查权限状态
  const checkPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    if (result === RESULTS.GRANTED) {
      console.log('权限已授予');
    } else {
      console.log('权限未授予');

      requestPermission(); // 请求权限
    }
  };
  const openAppSettings = () => {
    if (Platform.OS === 'android') {
      Linking.openSettings();
    }
  };
  // 请求权限
  const requestPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    console.log(result);

    if (result == 'blocked') {
      openAppSettings();
    }
    if (result === RESULTS.GRANTED) {
      console.log('权限已授予');
    } else {
      console.log('权限未授予');
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (result) {
        const uri = result.uri; // 文件的 URI
        const type = result.type; // 文件的 MIME 類型
        const name = result.name; // 文件名稱
        const size = result.size; // 文件大小（以位元組為單位）
        console.log(result);

        for (const key in result) {
          if (result.hasOwnProperty(key)) {
            const value = result[key];

            console.log(value.uri);
            readFileFromContentUri(value.uri);
          }
        }
      } else {
        console.log('No document selected.');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // 用户取消选择文件
      } else {
        throw err;
      }
    }
  };
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
  const getContentResolver = () => {
    return (contentResolver = android.content.ContentResolver());
  };
  const readFileFromContentUri = async uri => {
    try {
      const data = await RNFS.readFile(uri, 'utf8');
      console.log('File contents:', data);

      const lines = data.split('\n'); // 以换行符分割文本，创建行数组

      // 遍历每行并分割成字段
      for (const line of lines) {
        const fields = line.split(','); // 以逗号分割每行
        if (fields.length > 0) {
          // 处理每个字段
          const type = fields[0];
          switch (type) {
            case 'reader':
              // 处理读卡机数据
              const readerId = fields[1];
              const name = fields[2];
              const ip = fields[3];
              const port = fields[4];
              const sysPwd = fields[5];
              const openTime = fields[6];
              const beep = fields[7];
              const randomHex = generateRandomHex();
              console.log('機號', readerId);
              let Reader = {
                id: randomHex,
                no: readerId,
                name: name,
                ip: ip,
                port: port,
                sysPwd: sysPwd,
                openDoorTime: openTime,
                Beep: beep,
              };
              readers.push(Reader);
              StorageHelper.storeData('Readers', JSON.stringify(readers));

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

              // 其他字段处理
              break;
            case 'user':
              // 处理用户数据
              const userId = fields[1];
              const userData = fields[2];
              // 其他字段处理
              break;
            case 'autounlock':
              // 处理自动解锁数据
              const switchStatus = fields[1];
              const autounlockData = fields[2];
              // 其他字段处理
              break;
            // 其他类型的数据处理
            default:
              // 未知类型，可以进行错误处理或忽略
              break;
          }
        }
      }
      // 在這裡處理文件內容
    } catch (err) {
      console.error('Error reading file:', err);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: contentToShare, // 要分享的内容
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleAction(item.key)}>
      <Text style={styles.item}>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleAction = action => {
    // 执行相应的操作
    console.log(action);
    if (action == 'openDoor') {
      Comm.OpenDoor()
        .then(result => {
          // 在这里可以访问 result，它包含了从服务器接收的数据
          console.log('Received data 233:', result);
          console.log(result.length - 10);
          if (result.length - 10 >= 48) {
            console.log('接收到');
          }
        })
        .catch(error => {
          // 处理错误
          console.error('Error:', error);
        });
    }
    setModalVisible(false); // 关闭对话框
  };

  const [readers, setReaders] = useState([]);

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

  const closeDoor = () => {
    // 处理關門逻辑
    console.log('關門');
  };
  const handleButtonPress = () => {
    // 在按钮按下时执行的逻辑
    console.log('Button pressed!');
    navigation.navigate('AddReader');
  };

  const renderReaderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          const itemId = item.id;
          navigation.navigate('ReaderFunc', {itemId});
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 5,
          margin: 5,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'green',
        }}>
        <View
          style={{
            flex: 0.27,
          }}>
          <Image
            style={{
              width: 75,
              height: 75,
              resizeMode: 'contain',
            }}
            source={img580}
          />
        </View>
        <View
          style={{
            flex: 0.8,
          }}>
          <Text
            style={{
              color: '#000',
            }}>
            {item.name}
          </Text>
        </View>

        <View
          style={{
            flex: 0.18,
          }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FontAwesomeIcon icon={faLock} size={32} color="green" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    // checkPermission();
    requestCameraPermission();
    requestStoragePermission();
    // StorageHelper.removeData('Readers');
    const unsubscribe = navigation.addListener('focus', () => {
      // 在返回到组件时执行的操作
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
    });
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
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <MyHeader
        isHomePage={true}
        isShowBackBtn={false}
        isShowMoreBtn={true}
        titleText={'編輯'}
        onMoreBtnPress={() => {
          console.log('1');
          pickDocument();
          // handleShare();
        }}
      />

      <View
        style={{
          flex: 0.88,
        }}>
        <FlatList
          data={readers}
          renderItem={renderReaderItem}
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
          <MyBtn buttonText={'新增讀卡機'} onPress={handleButtonPress} />
        </View>
        <View
          style={{
            flex: 0.11,
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
const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
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
export default Readers;
