import React, { useEffect, useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Props {
  theme: string;
}
const SocialLinks:React.FC<Props> = ({theme}) => {
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      setStyle("dark");
    } else {
      setStyle("");
    }
  }, [theme]);
  return (
    <div className={`socials ${style}`}>
        <a href="https://twitter.com/Moyolagos" target="_blank" rel="noreferrer"><TwitterIcon className='socials-icon' /></a>
        <a href='https://www.instagram.com/moyolagos/' target="_blank" rel="noreferrer"><InstagramIcon className='socials-icon' /></a>
        <a href="https://www.linkedin.com/in/moyosore-adebiyi-75165b88/" target={"_blank"} rel="noreferrer"><LinkedInIcon className='socials-icon' /></a>
    </div>
  )
}

export default SocialLinks