import React from 'react';
import {StyleSheet, View} from 'react-native';
import Data from '../proiect/projects.json'
function ContainerProject() {
    return (
        <View style = {styles.Container}>
            {Data.map((data,index) => {
            return <View>
              <Text>{data.name}</Text>
              </View>
            })}
        </View>
    )
}
const styles = StyleSheet.create({
Container: {
    position:'absolute',
    width:'95%',
    height:'75%',
    backgroundColor:'#3b3534',
    top:100,
    left: 30,
    borderRadius:'5%'
}})
export default ContainerProject;
