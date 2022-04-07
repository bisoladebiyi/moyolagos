import React, { useState, useEffect } from "react";
import moyo2 from '../images/moyosore.jpg'

interface Props {
    theme:string
}

const About:React.FC<Props> = ({theme}) => {
    const [style, setStyle] = useState("")
    useEffect(()=> {
        if(theme === "dark"){
            setStyle("dark")
        }else{
          setStyle("")
        }
    },[theme])
  return (
    <div className={`about ${style}`} id="about">
      <h1>About Moyo</h1>
      <div className="about-container">
          <img src={moyo2} alt="" />
        <p className="about-container-text">
          Moyosore Adebiyi is seasoned broadcasting and communications
          professional with over 7 years experience below his belt. He has
          worked as a writer, content creator and presenter for Inspiration FM
          Lagos, Biscon Commmunications (TV/Magazine/Ads), Avalon Daily, Canary Nigeria and
          Afrotourism.
          <br />
          <br />
          Many of his writing works have been featured in magazines, blogs,
          social media posts and advertisements. As a copy editor with
          exceptional editing skills and attention to detail he has ample
          experience leading a team of content editors and writers in providing
          current and engaging text to meet industry and company standards.
        </p>
      </div>
    </div>
  );
};

export default About;
