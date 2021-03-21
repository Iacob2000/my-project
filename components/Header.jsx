import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

function Header() {
    return (
      
<View style = {styles.MyHeader}>  
 <Text style = {styles.textHeder}>My Projects</Text>
</View >

  )
}
const styles = StyleSheet.create({
  textHeder:{
     width: '100%',
     height:'10%',
     marginTop:'2%',
     fontSize : 30,
     color: 'white',
     style:'bold',
     marginStart:'40%',
     flex:2
    },
    card:{
      width:'90%',
      height:'60%',
      marginTop:'5%',
      marginLeft:'5%',
      marginBottom:10,
      shadowColor:'#000',
      shadowOpacity: 1
    },
    MyHeader:{
    width: '100%',
    height:'10%',
    backgroundColor:'#3b3534'
    }
  });

export default Header;
