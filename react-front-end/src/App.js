import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import About from './components/about/about';
import Main from './components/main/Main';
import Profile from './components/profile/profile';
import Logged from './components/main_logged/main-logged';
import React, { useState } from 'react'; 

const ABOUT = "About";
const USER = "User";
const MAIN = "Main";
const MAINLOGGED = "Mainlogged";
const REGISTER = "Register";
const EVENT = "Event";
const CREATE = "Create";


export default function App() { 
    const [mode, setmode] = useState(ABOUT); 
    return (
      <div className="App">
        {mode === ABOUT && <About/>}
        {mode === USER && <Profile/>}
        {mode === MAIN && <Main/>}
        {mode === MAINLOGGED && <Logged/>}
        {/* {mode === EVENT && <Event/>} */}
        {/* {mode === REGISTER && <Register/>} */}
        {/* {mode === CREATE && <Create/>} */}
      </div>
    );
}

