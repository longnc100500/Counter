import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
 class App extends Component{
   constructor(props){
     super(props);
     this.state = {result:0};
     console.log('ABCDSA');
     //this.add = this.add.bind(this);
     //this.sub = this.sub.bind(this);
   }
   add(){
     console.log('ABC');
   }  
   sub = ()=>{
<<<<<<< HEAD
    // this.setState({result:this.state.result-1})//2 way to setState
    console.log(this);
=======
    this.setState(pre=>{
      return {result : pre.result -1};
    });
>>>>>>> parent of 7dea94e... add another setstate way
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.result}>{this.state.result}</Text>
          <View style={styles.btnContainer}>
          <TouchableOpacity style = {styles.addButton} onPress = {this.add}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subButton} onPress={this.sub}>
            <Text style={styles.icon}>-</Text>
          </TouchableOpacity>
          </View>
          
      </View>
    )
  };
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

  },
  btnContainer:{
    flexDirection:'row',
    //borderWidth:1,
    width:'70%',
    justifyContent:'space-around'
    
  },
  addButton:{
    width:50,
    height:50,
    //borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
  },
  subButton:{
    width:50,
    height:50,
    //borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
  },
  icon:{
    fontSize:40,
  },
  result:{
    fontSize:40,
    marginTop:40,
  }
})
module.exports = App;