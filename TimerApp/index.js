/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Control from './Components/Control';
import Sub from './Components/learnProps';
function getComponentFunction(){
    return App;
}
AppRegistry.registerComponent(appName,()=>App)