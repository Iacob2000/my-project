import React from 'react'
import {StyleSheet,View,Text, ImageBackground} from 'react-native'
import Image from '../assets/WhatsApp Image 2021-02-08 at 09.53.08.jpeg'
function Header() {
    return (
   
<View style = {styles.MyHeader}> 
 <img src={Image} style ={{  width: 70,height: 70,borderRadius:'100%',position: 'relative',left:'70%'}}/>
 <Text style = {styles.textHeder}>My Projects</Text>
 <Text style = {styles.textHeder2}> Iacob Stelică</Text>
</View >

  )
}
const styles = StyleSheet.create({
  textHeder:{
    position: 'absolute',
    top: 15,
    left: 56,
    fontSize: 34,
    color:'white',
    fontStyle:'bold'
    },
    MyHeader:{
      width: '100%',
      height:'auto%',
      backgroundColor:'#3b3534',
      position:'relative'
      
      
    },
    textHeder2:{
      position:'absolute',
      top: 25,
      right: 146,
      fontSize: 28,
      color:'white'
    }
    });

export default Header;
