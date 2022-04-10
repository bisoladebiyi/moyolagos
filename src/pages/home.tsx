import React, { useEffect, useRef } from "react";
import About from "../components/about";
import Footer from "../components/footer";
import Home from "../components/home";
import Works from "../components/works";
import {
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import Contact from "../components/contact";

interface Props {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  style:string;
  contactRef: React.RefObject<HTMLDivElement>;
  posts: QuerySnapshot<DocumentData> | undefined
}
const HomePage: React.FC<Props> = ({ theme, setTheme, style, contactRef, posts }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const scrollDown = () => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
 
  useEffect(()=> {
    homeRef?.current?.scrollIntoView({ behavior: "smooth" });
  },[])
  return (
    <div className={`App ${style}`} ref={homeRef}>
      {" "}
      <Home theme={theme} scroll={scrollDown} />
      <div ref={scrollRef}>
        <About theme={theme} />
      </div>
      <Works theme={theme} posts={posts} />
      <div ref={contactRef} id="contact">
      <Contact theme={theme} ref={contactRef} />
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default HomePage;
