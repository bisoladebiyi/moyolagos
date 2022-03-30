import React, { useEffect, useState } from "react";
import {
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { Link } from "react-router-dom";


interface Props {
  theme: string;
  posts: QuerySnapshot<DocumentData> | undefined;
}

const Blogs: React.FC<Props> = ({ theme, posts }) => {
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      setStyle("dark");
    } else {
      setStyle("");
    }
  }, [theme]);

  return (
    <div className={`blogs ${style}`}>
      <h1>Blog</h1>
      <div className="blog">
        {posts?.docs.slice(0, 3).map((doc) => {
          return (
            <Link to={`/blog/${doc.id}`}>
            <div key={doc.id} className="blog-card">
              <p className="blog-card-title">{doc.data().title}</p>
              <p
                className="blog-card-description text"
                dangerouslySetInnerHTML={{
                  __html: doc.data().description.slice(0, 400) + "...",
                }}
              ></p>
              <button className="blog-card-button">See More</button>
            </div>
            </Link>
          );
        })}
      </div>
      <Link to="/blog"><button className="view-all">View All</button></Link>
    </div>
  );
};

export default Blogs;
