import { collection, DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../firebase';

interface Props {
    style: string
}
const BlogPage:React.FC<Props> = ({style}) => {
    const [posts, setPosts] = useState<QuerySnapshot<DocumentData>>();
    useEffect(() => {
        onSnapshot(collection(db, "posts"), (snapshot) => setPosts(snapshot));
        console.log(posts);
      }, []);
  return (
    <div className={`blogs ${style}`}>
    <h1>Blog</h1>
    <div className="blog">
      {posts?.docs.map((doc) => {
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
  </div>
  )
}

export default BlogPage