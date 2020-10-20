import React from 'react';
import Contact from './components/contact/Contact';
import Title from './components/header/Title';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <Title  txt="Bonjour : react Js"/>
        <Contact name="azeddine lakhdym" tel ="0645780703"/>
        <Contact name="Yahia lakhdym" tel ="0645780663"/>
      
    </div>
  );
}

export default App;
