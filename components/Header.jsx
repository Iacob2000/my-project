import React from 'react'
import {StyleSheet,View,Text , ImageBackground} from 'react-native-web'
import Image from '../assets/WhatsApp Image 2021-02-08 at 09.53.08.jpeg'
import {Link} from 'react-router-dom'
function Header() {
    return (
   
<View style = {styles.MyHeader}> 
 <img src={Image} style ={{  width: 70,height: 70,borderRadius:'100%',position: 'relative',left:'70%'}}/>
 <Link style ={{color: 'white',position:'absolute',left:'10%',fontSize:30,top:15}} to="/">My Projects</Link>
 <Link style ={{color: 'white',position:'absolute',left:'77%',fontSize:30,top:15}} to="/about">About me </Link>
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
      width: 'auto',
      height:'auto',
      backgroundColor:'#3b3534',
      position:'relative'
      
      
    },
    textHeder2:{
      position:'absolute',
      top: 25,
      right: 180,
      fontSize: 28,
      color:'white'
    }
    });

export default Header;
