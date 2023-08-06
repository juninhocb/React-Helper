import './App.css';
import Form from './components/Form';
import Event from './components/Event';
import Condition from './components/Condition';
import TeamsList from './components/TeamsList';
import { useState } from 'react';
import YourName from './components/YourName';
import Greetings from './components/Greetings';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Enterprise from './pages/Enterprise'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/enterprise" element ={<Enterprise/>}></Route>
          <Route path="/contact" element= {<Contact/>} ></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
