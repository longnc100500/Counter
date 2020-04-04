/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Control from './Components/Control';
function getComponentFunction(){
    return Control.cre;
}
AppRegistry.registerComponent(appName,getComponentFunction)