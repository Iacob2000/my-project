import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {StyleSheet, View} from 'react-native-web'
function Layout(props) {
    return (
        <View  style = {styles.background}>
         
        <Header/>
        
   
                { props.children }
      
        <Footer/>
      
  </View>
 
    )
}
const styles = StyleSheet.create({
   background:{
       backgroundColor:'black'
   }
})
export default Layout;
