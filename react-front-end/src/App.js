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
import User from './components/user/User';
import Logged from './components/main_logged/main-logged';
import Event from './components/event/EventPage';
import Create from 'components/create/Create';
import React, { useState } from 'react'; 
import useApplicationData from "hooks/useApplicationData";
import Map from 'components/map/Map';
import Places from 'components/map/Places';

const ABOUT = "About";
const USER = "User";
const MAIN = "Main";
const MAINLOGGED = "Mainlogged";
const REGISTER = "Register";
const EVENT = "Event";
const CREATE = "Create";
const MAP = "Map";
const PLACES = "Places";

export default function App() { 
    const [mode, setMode] = useState(PLACES); 
    const [event, setEvent] = useState({}); 
    const { state } = useApplicationData();
    return (
      <div className="App">
        {/* <NavBar/> */}
        {mode === ABOUT && <About/>}
        {mode === MAIN && <Main state ={state} setMode={setMode} setEvent={setEvent}/>}
        {mode === MAINLOGGED && <Logged/>}
        {mode === EVENT && <Event event={event}/>}
        {mode === USER && <User state={state}/>}
        {mode === REGISTER && <Register/>}
        {mode === CREATE && <Create />}
        {mode === MAP && <Map />}
        {mode === PLACES && <Places/>}
        <Footer/>
      </div>
    );
}

