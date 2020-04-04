/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Control from './Components/Control';

AppRegistry.registerComponent(appName, ()=>Control.Control)