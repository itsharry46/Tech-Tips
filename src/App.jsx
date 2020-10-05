import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import Homel from './components/Mainpage/Homel';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth/Auth";
import PrivateRoute from "./components/Auth/PrivateRoute";

const App = () => {
  return (

    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/Homel" component={Homel} />
          <Route excat path='/Signin' component={Signin} />
          <Route excat path='/Signup' component={Signup} />
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;