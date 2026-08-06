import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './container/About/About';
import Intro from './container/Intro/Intro';
import Projects from './container/Projects/Projects';
import Header from './container/Header/Header';
import Contact from './container/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
