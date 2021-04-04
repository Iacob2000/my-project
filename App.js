import {BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React ,{ Component }from 'react';
import { StyleSheet} from 'react-native';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404'

export default class MyProjects extends React.Component{
  constructor() {
    super();
    this.state = {};
  }
  render(){
  return (
    <div>
    <BrowserRouter>
    
    
   
     
      <Route path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='*' component={Page404}/>
  

  </BrowserRouter>
  </div>
  );
}
}
const styles = StyleSheet.create({ 
  styleView :{ 
    width: '100%',
    height: 'auto',
  position:'absolute',
  backgroundColor:'black'}
})

