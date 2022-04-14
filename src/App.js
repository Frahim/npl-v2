import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Predictions from './Pages/Predictions';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './Pages/Login';
import MediaFeed from './Pages/MediaFeed'
//import Header from './Component/Header';

 
class App extends Component {
  render() {
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
}
 
export default App;