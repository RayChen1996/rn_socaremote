import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, Image} from 'react-native';
import MyBtn from '../components/_Button';
import socaLogo from '../assets/soca.png';
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

import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'; // 使用适当的图标库和图标名称
const _header = props => {
  const {onPress, titleText, isHomePage, isShowMoreBtn, isShowBackBtn} = props;
  return (
    <View
      style={{
        flex: 0.1,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 0.222,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isShowBackBtn ? (
          <TouchableOpacity
            onPress={() => {
              console.log('back press');
            }}
            style={{}}>
            {/**   
         <FontAwesomeIcon icon={faArrowCircleLeft} size={32} color="green" />
          */}
            <Image
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      <View
        style={{
          flex: 0.556,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isHomePage ? (
          <Image
            style={{
              width: 250,
              height: 90,
              resizeMode: 'contain',
            }}
            source={socaLogo}
          />
        ) : (
          <Text
            style={{
              color: 'black',
              fontSize: 24,
              fontWeight: '900',
            }}>
            {titleText}
          </Text>
        )}
      </View>
      <View
        style={{flex: 0.222, justifyContent: 'center', alignItems: 'center'}}>
        {isShowMoreBtn ? (
          <TouchableOpacity onPress={onPress} style={{}}>
            {/**   
         <FontAwesomeIcon icon={faArrowCircleLeft} size={32} color="green" />
          */}
            <Image
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}
              source={require('../assets/more.png')}
            />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default _header;
