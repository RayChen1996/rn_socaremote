import React, {useState} from 'react';
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
} from 'react-native';
import 'react-native-gesture-handler';
import MyHeader from '../../components/_header';
import MyBtn from '../../components/_Button';
import {NavigationContainer} from '@react-navigation/native';
import img580 from '../../assets/st580.png';
import unlocak from '../../assets/unlock.png';
import {createStackNavigator} from '@react-navigation/stack';
import {
  faCalendar,
  faBullhorn,
  faEnvelope,
  faComment,
  faBookmark,
  faUser,
  faArrowCircleLeft,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Stack = createStackNavigator();

const Readers = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {key: 'openDoor', label: '開門'},
    {key: 'emergencyOpenDoor', label: '緊急開門'},
    {key: 'output2', label: '接點2輸出'},
    {key: 'closeDoor', label: '關門'},
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleAction(item.key)}>
      <Text style={styles.item}>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleAction = action => {
    // 执行相应的操作
    console.log(action);
    setModalVisible(false); // 关闭对话框
  };

  const [readers, setReaders] = useState([
    {
      id: 1,
      name: 'ST-580U',
    },
    {
      id: 2,
      name: 'ST-580U',
    },
    {
      id: 3,
      name: 'ST-580U',
    },
  ]);
  const showOptions = () => {
    Alert.alert(
      '选择一个操作',
      '请选择一个操作来执行：',
      [
        {text: '开门', onPress: () => openDoor()},
        {text: '緊急開門', onPress: () => emergencyOpenDoor()},
        {text: '接點2輸出', onPress: () => output2()},
        {text: '關門', onPress: () => closeDoor()},
      ],
      {cancelable: true},
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
          navigation.navigate('ReaderFunc');
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
