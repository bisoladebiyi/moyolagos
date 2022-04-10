import { DocumentData, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import Blogs from "../components/blogs";
import Broadcasting from "../components/broadcasting";
import ContentDevelopment from "../components/contentDevelopment";

interface Props {
  theme: string;
  style: string;
  posts: QuerySnapshot<DocumentData> | undefined
}

const WorksPage: React.FC<Props> = ({ theme, style, posts }) => {
  const worksRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    worksRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className={`works ${style}`} ref={worksRef}>
      <Broadcasting page={true} />
      <ContentDevelopment />
      <Blogs posts={posts} page={true} theme={theme} />
    
    </div>
  );
};

export default WorksPage;
