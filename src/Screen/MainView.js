import React from 'react';
import {View, Text} from 'react-native';

import MyHeader from '../components/_header';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ReadersPage from '../Screen/Readers/Readers';
import AddReader from '../Screen/AddReader';
import EditReader from '../Screen/Readers/ReaderEdit';

import ReaderFunc from '../Screen/Readers/Readerfunction';

import UnlockSet from '../Screen/Readers/UnlockSet';

import FloorSet from '../Screen/Readers/FloorSet';

import CardHome from '../Screen/Cards/CardHome';
import AddCard from '../Screen/Cards/AddCardPage';
import EditCard from '../Screen/Cards/EditCard';

import CardCopy from '../Screen/Cards/ReaderCopy';

import HistoryMain from '../Screen/History/HistoryMain';

const Stack = createStackNavigator();

const MainView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            title: '讀卡機',
            headerShown: false,
          }}
          name="Home"
          component={ReadersPage}
        />
        <Stack.Screen
          name="AddReader"
          options={{
            title: '新增讀卡機',
          }}
          component={AddReader}
        />
        <Stack.Screen
          name="EditReader"
          options={{
            headerShown: false,
          }}
          component={EditReader}
        />
        <Stack.Screen
          name="ReaderFunc"
          options={{
            headerShown: false,
          }}
          component={ReaderFunc}
        />
        <Stack.Screen
          name="EditReaderFloor"
          options={{
            headerShown: false,
          }}
          component={FloorSet}
        />
        <Stack.Screen
          name="EditReaderUnlockSet"
          options={{
            headerShown: false,
          }}
          component={UnlockSet}
        />
        <Stack.Screen
          name="CardHome"
          options={{
            headerShown: false,
          }}
          component={CardHome}
        />
        <Stack.Screen
          name="CardCopy"
          options={{
            headerShown: false,
          }}
          component={CardCopy}
        />

        <Stack.Screen
          name="AddCard"
          options={{
            headerShown: false,
          }}
          component={AddCard}
        />
        <Stack.Screen
          name="EditCard"
          options={{
            headerShown: false,
          }}
          component={EditCard}
        />
        <Stack.Screen
          name="HistoryMain"
          options={{
            headerShown: false,
          }}
          component={HistoryMain}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainView;
