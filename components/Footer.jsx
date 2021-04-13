import React from 'react';
import {StyleSheet,View,Text} from 'react-native-web';




function Footer() {
    return (
       
        <View style={styles.MyFooter}>
          <Text style = {styles.TextContact}>  Contact: </Text>
          <Text style={styles.TextDetalii}>stelicaiacob80@yahoo.com </Text> 
          <Text style={styles.TextDetalii}>0728834084</Text> 
          <a style ={{ 
        color:'white',
        style:'bold',
        width:'100%',
        marginStart:250,
        width:150,
        fontSize: 15,
        marginTop: 15,
        position:'relative',
        left:'20%'}} href='https://github.com/Iacob2000'>My Githup account</a>
          <a style ={{  color:'white',
        style:'bold',
        marginStart:250,
        fontSize: 15,
        width:150,
        marginTop: 15,
        position:'relative',
        left:'20%'}} href='https://www.linkedin.com/in/iacob-stelic%C4%83-5b4783203'>My Linkdin account</a>
          <Text style = {styles.CopyWrite}> © Iacob Stelică,April 2021</Text>
        </View>
       
    )
}
const styles = StyleSheet.create({ 
    MyFooter:{
        width: '100%',
        height: 'auto',
        backgroundColor:'#3b3534',
        position:'absolute',
        top:'100%',
      
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
        position:'relative',
         
    },
    CopyWrite:{
        color:'white',
        style:'bold',
        marginStart:'80%',
        fontSize: 15,
        marginTop: 10,
        position:'relative',
    }})
export default Footer;
