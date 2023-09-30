import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import HomePage from './components/HomePage';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';

function App() {
  return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route path='/' element={<ProtectRoute Component = {HomePage}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </Router>
    </React.Fragment>
  );
}

export default App;
