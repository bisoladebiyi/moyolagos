import React from 'react'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const ContentDevelopment = () => {
  return (
    <div className='contentDev'>
        <h2>Content Development</h2>
        <div className='content'>
            <a href="https://www.instagram.com/canarynigeria/" target={"_blank"} rel="noreferrer">
            <div className="content-card">
                <p>Social Media content for:</p>
                <a href="https://www.instagram.com/canarynigeria/" target={"_blank"} rel="noreferrer" className='content-card-link'>Canary Nigeria <ArrowForwardIosRoundedIcon className='icon' /></a>
            </div></a>
            <a href="https://www.instagram.com/elaiapartnersng/" target={"_blank"} rel="noreferrer">
            <div className="content-card">
                <p>Social Media content for:</p>
                <a href="https://www.instagram.com/elaiapartnersng/" target={"_blank"} rel="noreferrer" className='content-card-link'>Elaia Partners <ArrowForwardIosRoundedIcon className='icon' /></a>
            </div>
            </a>
            <a href="https://www.instagram.com/firstinfrastructureng/" target={"_blank"} rel="noreferrer">
            <div className="content-card">
                <p>Social Media content for:</p>
                <a href="https://www.instagram.com/firstinfrastructureng/" target={"_blank"} rel="noreferrer" className='content-card-link'>First Infrastructure Nigeria <ArrowForwardIosRoundedIcon className='icon' /></a>
            </div>
            </a>
            
        </div>
    </div>
  )
}

export default ContentDevelopment