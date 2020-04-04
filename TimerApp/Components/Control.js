import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
 class Control extends Component {
  render(){
    return(    
    <View style={styles.container}>
        <Text style={styles.txt}>HelloWorld</Text>
    </View>
    )
}
}
const Control1 = ()=>{
    return(
        <View style={styles.container}>
            <Text style={[styles.txt,{color:'red'}]}>HelloWorld</Text>
        </View>
    )
}
const styles = StyleSheet.create({
txt:{
    fontSize:30,
    fontWeight:'bold',
    //color:'red',
},
container:{
    alignItems:'center',
    justifyContent:'center',
    flex:1, 
}
});
module.exports = {Control,Control1};