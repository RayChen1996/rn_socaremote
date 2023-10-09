//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import dayjs from 'dayjs';
import MyBtn from '../../components/_Button';
import DeleteBtn from '../../components/_deleteBtn';
import Rdo from '../../components/_RadioButton';
// create a component
const CardEdit = ({navigation}) => {
  const formattedDate = dayjs().format('YYYY/MM/DD');
  const [isSingleAddSelected, setIsSingleAddSelected] = useState(true);
  const [isMultipleAddSelected, setIsMultipleAddSelected] = useState(false);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const handleSingleAddPress = () => {
    setIsSingleAddSelected(true);
    setIsMultipleAddSelected(false);
  };

  const handleMultipleAddPress = () => {
    setIsSingleAddSelected(false);
    setIsMultipleAddSelected(true);
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 0.89,
        }}>
        <ScrollView style={{flex: 0.4}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
              名稱
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={'預設名稱'}
              keyboardType="numeric"
            />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
              卡片
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={'輸入10位數卡號'}
              keyboardType="numeric"
            />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
              卡片密碼
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={'0000'}
              keyboardType="numeric"
            />
            <View style={{flex: 0.1}}></View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.18}}></View>
            <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
              使用期限
            </Text>
            <View>
              <Rdo label={'無限期'} />
            </View>
            <View>
              <Rdo label={'單次'} />
            </View>
            <View style={{flex: 0.1}}></View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
              開始日期
            </Text>
            <View style={{flex: 0.1}}></View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>

            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={formattedDate}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={formattedDate}
              keyboardType="numeric"
            />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
              結束日期
            </Text>
            <View style={{flex: 0.1}}></View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>

            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={formattedDate}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={formattedDate}
              keyboardType="numeric"
            />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
              接點權限
            </Text>
            <View style={{flex: 0.1}}></View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <View style={{flex: 0.2}}>
              <Rdo label={'接點1'} />
            </View>
            <View style={{flex: 0.2}}>
              <Rdo label={'接點2'} />
            </View>
            <View style={{flex: 0.2}}>
              <Rdo label={'接點1&2'} />
            </View>
            <View style={{flex: 0.1}}></View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <Text style={{color: '#000', fontSize: 24, fontWeight: '900'}}>
              樓層權限
            </Text>
            <View style={{flex: 0.1}}></View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 0.1}}></View>
            <View style={{flex: 0.8}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 10,
                  margin: 10,
                }}>
                <Text style={{textAlign: 'center'}}>選擇樓層</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.1}}></View>
          </View>
        </ScrollView>
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
            flex: 0.2,
          }}>
          <DeleteBtn buttonText={'刪除'} />
        </View>
        <View
          style={{
            flex: 0.05,
          }}></View>
        <View
          style={{
            flex: 0.2,
          }}>
          <MyBtn
            onPress={() => {
              navigation.pop();
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
            flex: 0.36,
          }}>
          <MyBtn buttonText={'確認新增'} />
        </View>

        <View
          style={{
            flex: 0.01,
          }}></View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  optionButton: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 5,
    padding: 18,
  },
  selectedOption: {
    backgroundColor: 'green',
  },
  unselectedOption: {
    backgroundColor: '#ccc',
  },
  optionText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

//make this component available to the app
export default CardEdit;
