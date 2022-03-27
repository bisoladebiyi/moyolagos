import React, { useEffect, useState } from 'react';
import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import SocialLinks from './components/socialLinks';
import Works from './components/works';
import './css/styles.css';

function App() {
  const [ theme, setTheme ] = useState("light")
  const [style, setStyle] = useState("")
  useEffect(()=> {
      if(theme === "dark"){
          setStyle("dark")
      }else{
        setStyle("")
      }
  },[theme])
  return (
    <div className={`App ${style}`}>
      <Navbar theme={theme} set={setTheme} />
      <Home theme={theme} />
      <About theme={theme} />
      <Works theme={theme} />
      <SocialLinks />
    </div>
  );
}

export default App;
