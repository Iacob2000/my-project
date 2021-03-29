import React from 'react'
import {StyleSheet,View,Text} from 'react-native'


function Footer() {
    return (
       
        <View style={styles.MyFooter}>
          <Text style = {styles.TextContact}>  Contact: </Text>
          <Text style={styles.TextDetalii}>stelicaiacob80@yahoo.com </Text> 
          <Text style={styles.TextDetalii}>0728834084</Text> 
          <Text style = {styles.TextDetalii} > https://github.com/Iacob2000 </Text>
          <Text style = {styles.TextDetalii}> https://www.linkedin.com/in/iacob-stelică-5b4783203</Text>
        </View>
       
    )
}
const styles = StyleSheet.create({
    MyFooter:{
        width: '100%',
        height: 'auto',
        backgroundColor:'#3b3534',
        position:'absolute',
        top:2500,
      
        },
    TextContact:{
        width:'30%',
        color:'white',
        style:'bold',
        fontSize: 25,
        marginTop: 8 ,
        left:'10%' ,
        position:'absolute',

    },
    TextDetalii:{
        color:'white',
        style:'bold',
        marginStart:250,
        fontSize: 15,
        marginTop: 15,
        position:'relative' 
    }
    })
export default Footer;
