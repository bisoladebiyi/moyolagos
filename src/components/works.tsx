import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import vid from '/videos/aviation.mp4'
interface Props {
    theme:string
}
const Works:React.FC<Props> = ({theme}) => {
    const [style, setStyle] = useState("")
    useEffect(()=> {
        if(theme === "dark"){
            setStyle("dark")
        }else{
          setStyle("")
        }
    },[theme])
  return (
    <div className={`works ${style}`}>
        <h1 className="works-title">Works</h1>
        <div className="work-videos">
            <div>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/lekkileisure.mp4"} type='video/mp4' />
            </video>
            <p className='caption'>Scripted, voiced and presented by Moyosore Adebiyi</p>
            </div>
            <div>

            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/onthespot.mp4"} type='video/mp4' />
            </video>
            <p className='caption'>Scripted and Voiced by Moyosore Adebiyi</p>
            </div>
          <div>
          <video controls width={500} height="300" className='vid'>
                <source src={"/videos/marriage.mp4"} type='video/mp4' />
            </video>
            <p className='caption'>Scripted and Voiced by Moyosore Adebiyi</p>
          </div>
            <div>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/voiceoverchallenge.mp4"} type='video/mp4' />
            </video>
            <p className='caption'>Scripted and Voiced by Moyosore Adebiyi</p>
            </div>
           
        </div>
    </div>
  )
}

export default Works