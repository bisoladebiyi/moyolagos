import React, { useEffect, useState } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

interface Props {
    set:  React.Dispatch<React.SetStateAction<string>>;
    theme: string;
    contactRef:React.RefObject<HTMLDivElement>
}
const Navbar: React.FC<Props> = ({theme, set, contactRef}) => {
    const [style, setStyle] = useState("")
    const [themeIcon, setThemeIcon] = useState(true)
    const navigate = useNavigate()
    useEffect(()=> {
        if(theme === "dark"){
            setStyle("dark")
        }else{
            setStyle("")
        }
    },[theme])
    const changeTheme = () => {
        if(theme === "light"){
            set("dark")
            console.log(theme)
        }else{
            set("light")
            console.log(theme)
        }
        setThemeIcon(!themeIcon)
    }
    const contact = () => {
        navigate("/#contact")
        contactRef?.current?.scrollIntoView({ behavior: "smooth" });
      }
  return (
    <div className={`navbar ${style}`}>
        <div className="logo"><span>moyo</span>lagos</div>
        <ul className="section-links">
                <Link to="/"><li className="sec-link">Home</li></Link>
                <li className="sec-link">About</li>
                <Link to={"/works"}><li className="sec-link">Works</li></Link>
                <Link to="/blog"><li className="sec-link">Blog</li></Link>
                <li className="sec-link" onClick={contact}>Contact</li>
                <div className='theme' onClick={changeTheme}>
                    {themeIcon ? <DarkModeOutlinedIcon className="moonIcon" /> : <LightModeOutlinedIcon className="sunIcon" />}
                    
                </div>
        </ul>
    </div>
  )
}

export default Navbar

   