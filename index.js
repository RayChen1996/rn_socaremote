/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainView from './src/Screen/MainView';
import {name as appName} from './app.json';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faCalendar,
  faBullhorn,
  faEnvelope,
  faComment,
  faBookmark,
  faUser,
  faBacon,
  faArrowCircleLeft,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

library.add(
  faCalendar,
  faBullhorn,

  faEnvelope,
  faComment,
  faBookmark,
  faUser,
  faBacon,
  faArrowCircleLeft,
  faLock,
);

AppRegistry.registerComponent(appName, () => MainView);
