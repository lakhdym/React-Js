import React from 'react';
import Contact from './components/contact/Contact';
import Title from './components/header/Title';
import './App.css';

function App() {
  return (
    <div className="App">
       <Title  txt="Bonjour : react Js"/>
       <Title  />
        <Contact name="azeddine lakhdym" tel ="0645780703"/>
        <Contact name="Yahia lakhdym" />
        <Contact />
      
    </div>
  );
}
export default App;
