import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button ,ImageBackground,Image, ScrollView,TouchableOpacity} from 'react-native';

const IdealPhoto = ( ) => {
  return (
    <View 
        style ={{ width: '100%',
        height: '100%'}}>

    <ImageBackground 
        style = {{width: '100%',
        height: '100%',
        flex : 1,
        backgroundColor:'black'}}  > 

    <View style = {{width: '100%',
         height:'10%',
         backgroundColor:'#3b3534'}}>  

 <Text style = {styles.textHeder}>Ideal Picture</Text>

 </View >


   </ImageBackground>

   </View>
  )
}
const styles = StyleSheet.create({

heder:{
  width: '100%',
 marginStart:'80%', 
  backgroundColor:'#3b3534'

},
textHeder:{
width: '100%',
height:'10%',
 marginTop:'2%',
 fontSize : 30,
 color: 'white',
 style:'bold',
 marginStart:'5%',

 flex:2
},
card:{
  
  width:'90%',
  height:'60%',
  marginTop:'5%',
  marginLeft:'5%',
  marginBottom:10,
  shadowColor:'#000',
  shadowOpacity: 1,

},
cardImage:{
  width:'100%',
  height:200,
  resizeMode:'cover'
}

});
export default IdealPhoto;