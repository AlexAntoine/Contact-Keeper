import Navbar from './components/layout/Navbar';
import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';

import './App.css';

import ContactState from "./context/contact/ContactState";
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
      <ContactState>
      <AlertState>
      <Router>
        <Fragment >
        <Navbar/>
        <div className='container'>
          <Alerts/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
        </Fragment>
      </Router>
      </AlertState>
      </ContactState>
      
    </AuthState>
  );
}

export default App;
