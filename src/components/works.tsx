import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Blogs from './blogs'
import Broadcasting from './broadcasting'
import ContentDevelopment from './contentDevelopment';
// import vid from '/videos/aviation.mp4'
interface Props {
    theme:string;
    posts:QuerySnapshot<DocumentData> | undefined;
}
const Works:React.FC<Props> = ({theme, posts}) => {
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
        <ContentDevelopment />
        <Blogs posts={posts} theme={theme} />
        <Broadcasting page={false} />
    </div>
  )
}

export default Works