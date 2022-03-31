import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


interface Props {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    style:string;
    menu:()=> void
}
const SideMenu:React.FC<Props> = ({ theme, setTheme, style, menu}) => {
    const [themeIcon, setThemeIcon] = useState(true)
    const changeTheme = () => {
        if(theme === "light"){
            setTheme("dark")
            console.log(theme)
        }else{
            setTheme("light")
            console.log(theme)
        }
        setThemeIcon(!themeIcon)
    }
  return (
    <div className={`side-menu ${style}`}>
        <button onClick={menu}>
            <CloseRoundedIcon className='close' />
        </button>
        <div className='side-menu-links'>
        <ul>
                <Link to="/"><li className="sec-link" onClick={menu}>Home</li></Link>
                <li className="sec-link" onClick={menu}>About</li>
                <Link to={"/works"}><li className="sec-link" onClick={menu}>Works</li></Link>
                <Link to="/blog"><li className="sec-link" onClick={menu}>Blog</li></Link>
                <li className="sec-link" onClick={menu}>Contact</li>
                <div className='theme' onClick={changeTheme}>
                    {themeIcon ? <DarkModeOutlinedIcon className="moonIcon" /> : <LightModeOutlinedIcon className="sunIcon" />}
                    
                </div>
        </ul>
        </div>
    </div>
  )
}

export default SideMenu