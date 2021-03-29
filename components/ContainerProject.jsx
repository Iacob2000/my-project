import React from 'react';
import {StyleSheet, View} from 'react-native';
import Data from '../proiect/projects.json'
function ContainerProject() {
    return (
        <View style = {styles.Container}>
            {Data.map((data,index) => {
            return <View style={styles.Text}>
              <h2>{data.about}</h2>
              <h1>{data.name}</h1>
              <h2>{data.descriere}</h2>
              <View style = {styles.Image}>
            <img src ={data.image} />
              </View>
              </View>
              
            })}
            </View>
    )
}
const styles = StyleSheet.create({
Container: {
    position:'absolute',
    width:'95%',
    height:'auto',
    backgroundColor:'#3b3534',
    top:100,
    left: 30,
    borderRadius:'5%'
},
Text:{
    color:'white'
},
Image:{
    width:150,
    height:'auto'
}})
export default ContainerProject;
