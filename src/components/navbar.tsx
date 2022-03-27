import React, { useEffect, useState } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

interface Props {
    set:  React.Dispatch<React.SetStateAction<string>>;
    theme: string
}
const Navbar: React.FC<Props> = ({theme, set}) => {
    const [style, setStyle] = useState("")
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
    }
  return (
    <div className={`navbar ${style}`}>
        <div className="logo"><span>moyo</span>lagos</div>
        <ul className="section-links">
                <li className="sec-link active">Home</li>
                <li className="sec-link">About</li>
                <li className="sec-link">Works</li>
                <li className="sec-link">Blog</li>
                <div className='theme' onClick={changeTheme}>
                    <LightModeOutlinedIcon />
                </div>
        </ul>
    </div>
  )
}

export default Navbar

   