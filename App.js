import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button ,ImageBackground,Image, ScrollView,TouchableOpacity} from 'react-native';
import Header from './components/Header';
import Footer from './components/Futer';

const MyProjects = ( ) => {
  return (
    <View 
        style ={{ width: '100%',
        height: '100%',
        position:'absolute',
       backgroundColor:'black'}}>
         
          <Header/>
         
         

          
          <Footer/>
          
    </View>
  )
}
const styles = StyleSheet.create({
})
export default MyProjects;