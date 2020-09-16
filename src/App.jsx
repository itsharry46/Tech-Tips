import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Login from './components/Auth/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.css';

const App = () => {
  return(
    <>
      <Switch> 
        <Route excat path='/login' component={Login}/>
        <Route path='/' component={Home}/>
        <Redirect to ="/" />
      </Switch>
    </>
  );
};

export default App;