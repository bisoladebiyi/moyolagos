import React, { useEffect, useState } from "react";
import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

interface Props {
  theme?: string;
  posts: QuerySnapshot<DocumentData> | undefined;
  page?: boolean;
}

const Blogs: React.FC<Props> = ({ theme, posts, page }) => {
  const [style, setStyle] = useState("");
  const [btn, setBtn] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      setStyle("dark");
    } else {
      setStyle("");
    }
    if (page) {
      setBtn(false);
    }
  }, [theme]);

  return (
    <div className={`blogs ${style} ${page && "page"}`}>
      <h1>Writings</h1>
      <div className="blog">
        {page
          ? posts?.docs.map((doc) => {
              return (
                <Link to={`/writings/${doc.id}`}>
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
            })
          : posts?.docs.slice(0, 3).map((doc) => {
              return (
                <Link to={`/writings/${doc.id}`}>
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
      {btn && (
        <Link to="/works">
          <button className="view-all">View All Works</button>
        </Link>
      )}
    </div>
  );
};

export default Blogs;
