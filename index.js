/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppComponent from './App/app';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppComponent));
