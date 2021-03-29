import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button ,ImageBackground,Image, ScrollView,TouchableOpacity} from 'react-native';
import Header from './components/Header';
import Footer from './components/Futer';
import Container from './components/ContainerProject';


const MyProjects = ( ) => {
  return (
    
    <View style = {styles.styleView}>
         
          <Header/>
          
          <Container />
        
          <Footer/>
        
    </View>
   
  )
}
const styles = StyleSheet.create({ 
  styleView :{ 
  width: '100%',
  height: '190%',
  position:'relative',
  backgroundColor:'black'}
})

export default MyProjects;