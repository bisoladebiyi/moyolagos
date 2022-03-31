import React, { useEffect, useRef, useState } from "react";
import About from "../components/about";
import Blogs from "../components/blogs";
import Footer from "../components/footer";
import Home from "../components/home";
import Works from "../components/works";
import {
  collection,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import Contact from "../components/contact";

interface Props {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  style:string;
  contactRef: React.RefObject<HTMLDivElement>
}
const HomePage: React.FC<Props> = ({ theme, setTheme, style, contactRef }) => {
  const [posts, setPosts] = useState<QuerySnapshot<DocumentData>>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const scrollDown = () => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => setPosts(snapshot));
    console.log(posts);
  }, []);
  useEffect(()=> {
    homeRef?.current?.scrollIntoView({ behavior: "smooth" });
  })
  return (
    <div className={`App ${style}`} ref={homeRef}>
      {" "}
      <Home theme={theme} scroll={scrollDown} />
      <div ref={scrollRef}>
        <About theme={theme} />
      </div>
      <Works theme={theme} />
      <Blogs theme={theme} posts={posts} />
      <div ref={contactRef} id="contact">
      <Contact theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default HomePage;
