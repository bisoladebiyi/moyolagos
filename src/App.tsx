import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import SideMenu from "./components/sideMenu";
import SocialLinks from "./components/socialLinks";
import "./css/styles.css";
import BlogDetails from "./pages/blogDetails";
import HomePage from "./pages/home";
import WorksPage from "./pages/works";
import { polyfill } from "seamless-scroll-polyfill";
import { collection, DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";




function App() {
  const [theme, setTheme] = useState("light");
  const [style, setStyle] = useState("");
  const contactRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [posts, setPosts] = useState<QuerySnapshot<DocumentData>>();

  useEffect(() => {
    if (theme === "dark") {
      setStyle("dark");
    } else {
      setStyle("");
    }
  }, [theme]);
  useEffect(()=> {
    onSnapshot(collection(db, "posts"), (snapshot) => setPosts(snapshot));
  },[])

  const menuToggle =()=> {
    setShowMenu(!showMenu)
    console.log("clicked")
  }



  return (
    <BrowserRouter>
    <div className={`App ${style}`}>
    {showMenu &&     <SideMenu theme={theme} style={style} setTheme={setTheme} menu={menuToggle} />}
    <Navbar theme={theme} set={setTheme} contactRef={contactRef} menu={menuToggle} />
      <Routes>
      <Route path="/" element={<HomePage theme={theme} style={style} setTheme={setTheme} contactRef={contactRef} posts={posts} />} />
      <Route path="/works" element={<WorksPage theme={theme} style={style} posts={posts} />} />
      <Route path="/writings/:id" element={<BlogDetails style={style} />} />
      </Routes>
      
      <SocialLinks theme={theme} />
    </div>
    </BrowserRouter>
    
  );
}

polyfill();

export default App;
