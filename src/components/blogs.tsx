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
    <div className={`writings ${style} ${page && "page"}`}>
      <h2>Writings / Articles</h2>
      <div className="writing">
        {page
          ? posts?.docs.map((doc) => {
              return (
                <Link to={`/writings/${doc.id}`}>
                  <div key={doc.id} className="writing-card">
                    <p className="writing-card-title">{doc.data().title}</p>
                    <p
                      className="writing-card-description text"
                      dangerouslySetInnerHTML={{
                        __html: doc.data().description.slice(0, 400) + "...",
                      }}
                    ></p>
                    <button className="writing-card-button">See More</button>
                  </div>
                </Link>
              );
            })
          : posts?.docs.slice(0, 3).map((doc) => {
              return (
                <Link to={`/writings/${doc.id}`}>
                  <div key={doc.id} className="writing-card">
                    <p className="writing-card-title">{doc.data().title}</p>
                    <p
                      className="writing-card-description text"
                      dangerouslySetInnerHTML={{
                        __html: doc.data().description.slice(0, 400) + "...",
                      }}
                    ></p>
                    <button className="writing-card-button">See More</button>
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
