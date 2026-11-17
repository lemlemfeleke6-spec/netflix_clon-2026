import React from 'react';
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon/>
          <InstagramIcon />
          <YouTubeIcon/>


        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>AudioDescription</li>
              <li>Invester Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
             <ul>
              <li>Help Center</li>
              <li>Jobs</li>
             </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Term of Use </li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='copy-write'>
          &copy; 1997-2026 Netflix, Inc.

        </div>
      </div>
      
    </div>
  );
}

export default Footer;
