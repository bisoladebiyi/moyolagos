import React, { useEffect, useRef, useState } from 'react'

interface Props{
    theme:string;
    style: string
}

const WorksPage:React.FC<Props> = ({theme, style}) => {
    const worksRef = useRef<HTMLDivElement>(null);
    useEffect(()=> {
        worksRef?.current?.scrollIntoView({ behavior: "smooth" });
    },[])
  return (
    <div className={`works ${style}`} ref={worksRef}>
        <h1 className="works-title">Works</h1>
        <div className="work-videos">
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/lekkileisure.mp4"} type='video/mp4' />
            </video>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/onthespot.mp4"} type='video/mp4' />
            </video>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/marriage.mp4"} type='video/mp4' />
            </video>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/voiceoverchallenge.mp4"} type='video/mp4' />
            </video>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/aviation.mp4"} type='video/mp4' />
            </video>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/election.mp4"} type='video/mp4' />
            </video>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/lagosfashionhub.mp4"} type='video/mp4' />
            </video>
            <video controls width={500} height="300" className='vid'>
                <source src={"/videos/thetable.mp4"} type='video/mp4' />
            </video>
        </div>
    </div>
  )
}

export default WorksPage