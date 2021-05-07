import React from 'react';
import {StyleSheet, View} from 'react-native-web';
import Data from '../projects.json';
import Layout from './Layout';
import {Link} from 'react-router-dom';
import { Text } from 'react-native';

function Home() {
    return ( <div>
    <Layout>
      <Text style= {styles.Text}>This is a presentation site for all the projects I have worked on in the last year</Text>
        <View> {Data.map((data,index) => {
            return <View key={data.id} style={styles.ContainerText}>
              <h2 >{data.about}</h2>
              <h3>{data.text}</h3>
              <h3 >{data.LinkLinkdin}</h3>
              <h3 >{data.LinkGithup}</h3>
              <h1>{data.name}</h1>
              <h2>{data.descriere}</h2>
              <h3>{data.use}</h3>
              <a style ={{color: 'black',position:'relative',left:'42%',fontSize:15,width:"15%",backgroundColor:'white',borderRadius:'10%',alignContent:'center',height:25}} href={data.link}>Go to source code</a>
              <a style ={{color: 'white',position:'relative',left:'42%',fontSize:15,width:"15%",backgroundColor:'black',borderRadius:'10%',alignContent:'center',top:15,height:25}} href={data.link}>Go to Google Play</a>
              
              <h3>{data.avalible}</h3>
              
            <div>

               <img style={{width:300}} src ={data.image}/>
              
            </div>


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
Text:{
  color:'white',
  position:'relative',
  left:"5%",
  width:'90%',
  height: 'auto',
  marginVertical:"2%",
  textAlign:'center',
  fontSize:'150%',
  
 
  
}

})
export default Home;