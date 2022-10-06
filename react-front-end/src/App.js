import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
//import Button from 'react-bootstrap/Button';
//import NavBar from './components/top_nav/top_nav';
import Footer from "./components/footer/footer";
import Register from "./components/register";
// import  AuthProvider from './components/context/AuthProvider';
// import axios from 'axios';
import About from './components/about/about';
import Main from './components/main/Main';
import Profile from './components/profile/profile';
import Logged from './components/main_logged/main-logged';
import Create from 'components/create/Create';
import React, { useState } from 'react'; 
import useApplicationData from "hooks/useApplicationData";

const ABOUT = "About";
const USER = "User";
const MAIN = "Main";
const MAINLOGGED = "Mainlogged";
const REGISTER = "Register";
const EVENT = "Event";
const CREATE = "Create";


export default function App() { 
    const [mode, setmode] = useState(CREATE); 
    const { state } = useApplicationData();
    return (
      <div className="App">
        {/* <NavBar/> */}
        {mode === ABOUT && <About state={state}/>}
        {mode === USER && <Profile/>}
        {mode === MAIN && <Main/>}
        {mode === MAINLOGGED && <Logged/>}
        {/* {mode === EVENT && <Event/>} */}
        {mode === REGISTER && <Register/>}
        {mode === CREATE && <Create/>}
        <Footer/>
      </div>
    );
}

