// QRCodeModal.js
import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import MyBtn from '../_Button';

const QRCodeModal = ({visible, onClose, shareTo}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: 300,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 27,

              color: 'black',
              fontWeight: '900',
              textAlign: 'center',
            }}>
            使用者行動條碼
          </Text>
          <View
            style={{
              gap: 5,

              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <QRCode value="https://www.google.com.tw" size={200} />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <MyBtn
              onPress={() => {
                //33
                onClose();
              }}
              buttonText={'取消'}
            />

            <MyBtn
              onPress={() => {
                shareTo();
              }}
              buttonText={'發送行動條碼'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default QRCodeModal;
