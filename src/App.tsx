import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import SocialLinks from "./components/socialLinks";
import "./css/styles.css";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blogDetails";

import HomePage from "./pages/home";
import WorksPage from "./pages/works";


function App() {
  const [theme, setTheme] = useState("light");
  const [style, setStyle] = useState("");
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === "dark") {
      setStyle("dark");
    } else {
      setStyle("");
    }
  }, [theme]);



  return (
    <BrowserRouter>
    <div className={`App ${style}`}>
    <Navbar theme={theme} set={setTheme} contactRef={contactRef} />
      <Routes>
      <Route path="/" element={<HomePage theme={theme} style={style} setTheme={setTheme} contactRef={contactRef} />} />
      <Route path="/works" element={<WorksPage theme={theme} style={style} />} />
      <Route path="/blog" element={<BlogPage style={style} />} />
      <Route path="/blog/:id" element={<BlogDetails style={style} />} />
      </Routes>
      
      <SocialLinks theme={theme} />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
