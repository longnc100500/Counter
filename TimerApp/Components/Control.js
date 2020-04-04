import React, { Component, version } from 'react';
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
        <Text style={[styles.txt,{color:'blue'}]}>Create Component with class</Text>
    </View>
    )
}
}
const Control1 = ()=>{
    return(
        <View style={styles.container}>
            <Text style={[styles.txt,{color:'red'}]}>Create Component with a variable store an anonymous function</Text>
        </View>
    )
}
function cre(){
    return (
        <View style={styles.container}>
            <Text style={[styles.txt,{color:'green'}]}>Create a Component with a normal function</Text>
        </View>
    )
}
const styles = StyleSheet.create({
txt:{
    fontSize:15,
    fontWeight:'bold',
    //color:'red',
},
container:{
    alignItems:'center',
    justifyContent:'center',
    flex:1, 
}
});
module.exports = {Control,Control1,cre};