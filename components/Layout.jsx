import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {StyleSheet, View} from 'react-native-web'
function Layout(props) {
    return (
        <View >
         
        <Header/>
        
   
                { props.children }
      
        <Footer/>
      
        </View>
 
    )
}
const styles = StyleSheet.create({ 
    
 

})
  
export default Layout;
