import React from 'react';
import {StyleSheet, View} from 'react-native-web';
import Data from '../proiect/projects.json';
import Layout from './Layout'

function Home() {
    return ( <div>
    <Layout>
        <View> {Data.map((data,index) => {
            return <View key={data.id} style={styles.ContainerText}>
              <h2 >{data.about}</h2>
              <h3>{data.text}</h3>
              <h3 >{data.LinkLinkdin}</h3>
              <h3 >{data.LinkGithup}</h3>
              <h1>{data.name}</h1>
              <h2>{data.descriere}</h2>
              <h3>{data.use}</h3>
              <h3>{data.link}</h3>
              <h3>{data.avalible}</h3>
              
              <View style = {styles.Image}>
               <img src ={data.image}/>
              </View>
              
              </View>
              
              
             
              
            })}
            </View>
            </Layout>
            </div>
            
    )
}
const styles = StyleSheet.create({

ContainerText:{
    color:'white',
    position:'relative',
    left:"5%",
    width:'90%',
    height: 'auto',
    marginVertical:"2%",
    borderRadius:"10%",
    backgroundColor:"#3b3534",
    textAlign:'center',
   
    
},
Image:{
    width:180,
    height:'auto',
    position:'absolute',
    left:'80%',
    top:"10%"
   
},

})
export default Home;