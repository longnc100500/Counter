import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet

} from 'react-native';
class SubComponent extends Component{ 
    render(){
        return(
        <Text style = {[styles.txt],{color:`${this.props.color}`}}>{this.props.name}</Text>
        );
}}
class Test extends Component{
    render(){
        return(    
            <View style={styles.container}>
               <SubComponent name = "Hello my name is Long" color = "red"/>
               <SubComponent name = "This is second component" color = "green"/> 
            </View>
        )
    }
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
module.exports = Test;