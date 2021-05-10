import {BrowserRouter,  Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';


export default class MyProjects extends React.Component{
  constructor() {
    super();
    this.state = {};
  }
  render(){
  return (
    <div style={{height:'auto',backgroundColor:'black'}} >
    <BrowserRouter>
    <Switch>

      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='*' component={Page404}/>
 
  </Switch>
  </BrowserRouter>
  </div>
  );
}
}

