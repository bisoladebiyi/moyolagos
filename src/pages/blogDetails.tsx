import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";

interface Props {
  style: string;
}

const BlogDetails: React.FC<Props> = ({ style }) => {
  const { id } = useParams();
  const [data, setData] = useState<DocumentSnapshot<DocumentData>>();
  useEffect(() => {
    if (id) {
      getData(id).then((res) => setData(res));
    }
  }, [id]);
  const getData = async (id: string) => {
    const res = await getDoc(doc(db, "posts", id));
    return res;
  };
  return (
    <div className="blogDetails">
      <p className="title">{data?.data()?.title}</p>
      <div
      className="description"
        dangerouslySetInnerHTML={{
          __html: data?.data()?.description,
        }}
      ></div>
      <Link to="/blog"><button>View All Posts</button></Link>
    </div>
  );
};

export default BlogDetails;
