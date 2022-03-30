import React, { useEffect, useState } from 'react'


interface Props {
    theme: string;

  }
const Footer:React.FC<Props> = ({theme}) => {
    const [style, setStyle] = useState("");

    useEffect(() => {
      if (theme === "dark") {
        setStyle("dark");
      } else {
        setStyle("");
      }
    }, [theme]);
  return (
    <div className={`footer ${style}`}>© Copyright 2022. All right reserved</div>
  )
}

export default Footer