import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Predictions from './Pages/Predictions';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './Pages/Login';
import MediaFeed from './Pages/MediaFeed'
import NotFoundPage from './Pages/NotFoundPage';
import BettingFeed from './Pages/BettingFeed';
//import Header from './Component/Header';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>  
            <Routes >
            <Route index  element={<Home/>} exact/>  
            <Route path="/login" element={<Login/>}/>  
             <Route path="/predictions" element={<Predictions/>}/>             
             <Route path="/mediafeed" element={<MediaFeed/>}/>  
             <Route path="/bettingfeed" element={<BettingFeed/>}/>                            
             <Route element={Error}/>
             <Route path="*" element={<NotFoundPage/>}/>
           </Routes>     
      </BrowserRouter>
    );
  }
}
 
export default App;