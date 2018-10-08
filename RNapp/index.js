/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import test from '@scope/ui'

console.log('test', test)

AppRegistry.registerComponent(appName, () => App);
