import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hotels from './components/pages/Hotels';
import Resturants from './components/pages/Resturants';
import Packages from './components/pages/Packages';
//import SignUp from './components/pages/SignUp';
import Form from './Form';
import Signin from './components/signin/Signin';

function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hotels' component={Hotels} />
          <Route path='/resturants' component={Resturants} />
          <Route path='/packages' component={Packages} />
          <Route path='/signup' component={Form} />
          <Route path='/signin' component ={Signin}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
