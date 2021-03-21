import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

function Futer() {
    return (
        <View style = {styles.MyFuter}>
          <Text>Contact</Text>  
        </View>
    )
}
const styles = StyleSheet.create({
    MyFuter:{
        width: '100%',
        height:'10%',
        backgroundColor:'white',
        marginHorizontal:'100'
       
        }  })
export default Futer;
