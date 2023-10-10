import React, {useEffect, useState} from 'react';
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
// 创建组件
const FloorSet = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  // 动作数据
  const actionData = [
    {key: 'adduser', label: '新增使用者'},
    {key: 'copyreader', label: '從其他讀卡機複製'},
    {key: 'deletAll', label: '刪除所有使用者'},
    {key: 'cancel', label: '取消'},
  ];

  // 楼层数据
  const floorData = [
    {id: 1, text: '1-18'},
    {id: 2, text: '19-36'},
    {id: 3, text: '37-54'},
    {id: 4, text: '55-72'},
    {id: 5, text: '73-90'},
    {id: 6, text: '91-108'},
    {id: 7, text: '109-126'},
    {id: 8, text: '127-128'},
    // 添加其他范围的数据
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [allButtons, setAllButtons] = useState([]);
  // 每页显示的楼层数量
  const itemsPerPage = 18;

  for (let i = 1; i <= 128; i++) {
    allButtons.push({
      id: i,
      label: `${i}`,
      active: false,
    });
  }

  // 计算当前页的数据范围
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [selectedPage, setSelectedPage] = useState(1);
  // 获取当前页的楼层数据

  const [currentPageButtons, setCurrentPageButtons] = useState([]); // 存储当前分页的按钮数据

  const [t1, setT1] = useState(0);

  // 处理切换页面
  const updateButtonActive = (buttonId, isActive) => {
    const updatedButtons = allButtons.map(button => {
      if (button.id === buttonId) {
        return {...button, active: isActive};
      }
      return button;
    });

    setAllButtons(updatedButtons);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleAction(item.key)}>
      <Text style={styles.item}>{item.label}</Text>
    </TouchableOpacity>
  );
  const handlePageChange = page => {
    setCurrentPage(page);

    // 计算当前分页按钮的数据
    const startIndex = (page - 1) * 18; // 每页显示18个按钮
    let endIndex = startIndex + 18;

    console.log(startIndex);
    if (endIndex > 128) {
      endIndex = 128;
    }
    console.log(endIndex);
    const buttonsData = allButtons.slice(startIndex, endIndex);

    setCurrentPageButtons(buttonsData);
  };
  const handleButtonPress = button => {
    console.log(`id = ${button.id}`);

    const newActiveState = !button.active;

    setTimeout(() => {
      updateButtonActive(button.id, newActiveState);
      handlePageChange(selectedPage);
    }, 1000);

    // 根据按钮的操作执行相应的操作
  };

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
        // 处理删除所有使用者逻辑
        break;
      case 'cancel':
        // 取消操作
        break;
      default:
        break;
    }
    setModalVisible(false); // 关闭对话框
  };

  const handleClickBtn = () => {
    navigation.pop();
  };

  useEffect(() => {
    handlePageChange(1);
  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <MyHeader
        isShowBackBtn={true}
        onPress={handleClickBtn}
        titleText={'選擇樓層'}
      />

      <View style={{flex: 0.9}}>
        <View
          style={{
            flex: 0.1,
          }}>
          <FlatList
            horizontal
            data={floorData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedPage(item.id);
                  handlePageChange(item.id);
                }}
                style={{
                  backgroundColor: selectedPage === item.id ? 'green' : '#fff',
                  width: 110,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  margin: 5,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '900',
                    color: selectedPage === item.id ? '#fff' : '#000',
                  }}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View
          style={{
            flex: 0.8,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 4,
          }}>
          {currentPageButtons.map((button, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleButtonPress(button)}
              style={{
                width: '24%', // 设置按钮宽度为父容器的一半，以便每行显示两个按钮
                marginBottom: 10, // 添加底部间距，使按钮换行
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                justifyContent: 'space-between',
                gap: 10,
                backgroundColor: button.active ? 'green' : '#fff', // 按钮的背景颜色
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50, // 设置按钮高度
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '900',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: button.active ? '#fff' : '#000',
                }}>
                {button.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 底部楼层按钮 */}
      </View>

      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flex: 0.01}}></View>
        <View style={{flex: 0.465}}>
          <MyBtn buttonText={'樓層全選'} />
        </View>
        <View style={{flex: 0.05}}></View>
        <View style={{flex: 0.465}}>
          <MyBtn buttonText={'確定傳送'} />
        </View>
        <View style={{flex: 0.01}}></View>
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
              data={actionData}
              renderItem={renderItem}
              keyExtractor={item => item.key}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

// 定义样式
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

// 导出组件
export default FloorSet;
