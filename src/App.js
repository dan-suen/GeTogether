import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import './App.scss';
import Footer from "./components/footer/footer";
import Register from "./components/register";
import About from './components/about/about';
import Main from './components/main/Main';
import Past from './components/past/past';
import User from './components/user/User';
import Event from './components/event/EventPage';
import Create from 'components/create/Create';
import TopNav from './components/top_nav/top_nav';
import React from 'react';
import useApplicationData from "hooks/useApplicationData";
import AuthProvider from './components/context/AuthProvider';
import Places from './components/map/Places'

export default function App() {
  const { state } = useApplicationData();
  return (
    <div className="App">
      <AuthProvider>
       <TopNav /> 
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Main state={state} />} />
          <Route path="/past" element={<Past state={state}/>} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/user" element={<User state={state} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/places" element={<Places/>}/>
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}
