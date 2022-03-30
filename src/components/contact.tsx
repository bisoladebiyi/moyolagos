import React, { useEffect, useState } from 'react'

interface Props {
    theme: string;

  }
const Contact:React.FC<Props> = ({theme}) => {
    const [style, setStyle] = useState("");

    useEffect(() => {
      if (theme === "dark") {
        setStyle("dark");
      } else {
        setStyle("");
      }
    }, [theme]);
  return (
    <div className={` contact ${style}`}>
        <h1>Get In Touch With Moyo</h1>
        <p>Want to work together? Hit me up!</p>
        <a href='mailto:moyodebiyi@gmail.com' className="btn">Say Hi</a>
    </div>
  )
}

export default Contact