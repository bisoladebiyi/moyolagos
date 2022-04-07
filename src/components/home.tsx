import React, { useEffect, useState } from 'react'
import moyo from '../images/moyo.jpg'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

interface Props {
    theme:string;
    scroll:() => void;
}
const Home:React.FC<Props> = ({theme, scroll}) => {
    const [style, setStyle] = useState("")
    useEffect(()=> {
        if(theme === "dark"){
            setStyle("dark")
        }else{
          setStyle("")
        }
    },[theme])
  return (
    <div className={`home ${style}`}>
        <figure>
        <img className='moyo-img' src={moyo} alt="" />
        </figure>
        <div>
            <p className='intro-text'>👋 Hi! I'm Moyosore, a <span> Writer, Broadcaster,<br /> and Content developer</span></p>
        </div>
        <div className="arrow" onClick={scroll}>
            <KeyboardArrowDownRoundedIcon />
            </div>
    </div>
  )
}

export default Home