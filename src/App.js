import React, { Component, useState  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Predictions from './Pages/Predictions';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './Pages/Login';
import MediaFeed from './Pages/MediaFeed'

//import Header from './Component/Header';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (    
      <BrowserRouter >       
             <Navigation />
            <Routes >
            <Route index  element={<Home/>} exact/>           
             <Route path="/predictions" element={<Predictions/>}/>             
             <Route path="/mediafeed" element={<MediaFeed/>}/>                           
            <Route element={Error}/>
           </Routes>     
      </BrowserRouter>
    
  );
}

export default App;
