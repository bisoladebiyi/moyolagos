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
        <TwitterIcon className='socials-icon' />
        <InstagramIcon className='socials-icon' />
        <LinkedInIcon className='socials-icon' />
    </div>
  )
}

export default SocialLinks