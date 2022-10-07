import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
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
import Event from './components/event/EventPage';
import Create from 'components/create/Create';
import TopNav from './components/top_nav/top_nav';
import React, { useState } from 'react';
import useApplicationData from "hooks/useApplicationData";
import AuthProvider from './components/context/AuthProvider';


export default function App() {
  const { state } = useApplicationData();
  return (
    <div className="App">
      <AuthProvider>
        <TopNav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Main state={state} />} />
          {/* <Route path="/" element={<Logged/>} /> */}
          <Route path="/event/:id" element={<Event />} />
          <Route path="/user" element={<User state={state} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}
