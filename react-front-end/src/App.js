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
import TopNav from './components/top_nav/top_nav';
import React, { useState } from 'react';
import useApplicationData from "hooks/useApplicationData";
import AuthProvider from './components/context/AuthProvider';

const ABOUT = "About";
const USER = "User";
const MAIN = "Main";
const MAINLOGGED = "Mainlogged";
const REGISTER = "Register";
const EVENT = "Event";
const CREATE = "Create";


export default function App() {
  const [mode, setMode] = useState(REGISTER);
  const [event, setEvent] = useState({});
  const { state } = useApplicationData();
  return (
    <div className="App">
      <AuthProvider>
        <TopNav setMode={setMode} />
        {mode === ABOUT && <About />}
        {mode === MAIN && <Main state={state} setMode={setMode} setEvent={setEvent} />}
        {mode === MAINLOGGED && <Logged />}
        {mode === EVENT && <Event event={event} />}
        {mode === USER && <User state={state} />}
        {mode === REGISTER && <Register />}
        {mode === CREATE && <Create />}
        <Footer setMode={setMode} />
      </AuthProvider>
    </div>
  );
}

