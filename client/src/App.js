import React from 'react';
import './App.css';
import { Router, Link, navigate } from '@reach/router';
import MainView from './views/MainView';
import LoginView from './views/LoginView'
import Dashboard from './views/Dashboard'
import axios from 'axios';


// import 'bootstrap/dist/css/bootstrap.min.css';

// import { update } from '../../server/models/User.model';

// axios.interceptors.response.use(response => response, 
//   ()=>navigate('/login'))

function App() {
  return (
      <Router>
        <MainView path="/" />  
        <LoginView path="/login"/>
        <Dashboard path="/dashboard"/>
      </Router>
  );
}

export default App;

