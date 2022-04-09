import { DocumentData, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import Blogs from "../components/blogs";

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
      <h1 className="works-title">Works</h1>
      <div className="work-videos">
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/lekkileisure.mp4"} type="video/mp4" />
          </video>
          <p className="caption">
            Scripted, voiced and presented by Moyosore Adebiyi
          </p>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/onthespot.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/marriage.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/voiceoverchallenge.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/aviation.mp4"} type="video/mp4" />
          </video>
          <p className="caption">
            Scripted, voiced and presented by Moyosore Adebiyi
          </p>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/election.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/lagosfashionhub.mp4"} type="video/mp4" />
          </video>
          <p className="caption">Scripted and Voiced by Moyosore Adebiyi</p>
        </div>
        <div>
          <video controls width={500} height="300" className="vid">
            <source src={"/videos/thetable.mp4"} type="video/mp4" />
          </video>
          <p className="caption">
            Scripted, voiced and presented by Moyosore Adebiyi
          </p>
        </div>
      </div>
      <Blogs posts={posts} page={true} theme={theme} />
    
    </div>
  );
};

export default WorksPage;
