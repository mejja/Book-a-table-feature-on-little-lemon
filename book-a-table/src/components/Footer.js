import * as React from 'react';
import "../App.css";
import logo from "../assets/logo.png";
import { Grid } from '@mui/material';




export default function Footer() {
  return (
    <Grid className='footer' sx={{borderTop:7, borderColor: "rgba(73, 94, 87)"}}>
            <div className='footer'>
            <div className="footer-img">
              <img
              src={logo} alt="Secondary logo"/>
            </div>
            <div className='navigation'>
                {/* Page Navigation Links */}
            <ul>
                <h5>Navigation</h5>
                <li>
                    <a className='a' href='/#'>Home</a>
                </li>
                <li>
                    <a className='a' href='/book-a-table/src/components/About.js'>About</a>
                </li>
                <li>
                    <a className='a' href='/book-a-table/src/components/Specials.js'>Menu</a>
                </li>
                <li>
                    <a className='a' href='/#reservations'>Reservations</a>
                </li>
                <li>
                    <a className='a' href='/#order'>Order Online</a>
                </li>
                <li>
                    <a className='a' href='/#login'>Login</a>
                </li>
            </ul>
            </div>
            {/* Contact information */}
            <div className='contact'>
            <ul>
                <h5>Contact</h5>
                <li>
                    <a id='nav' href='/#'>Phone Number</a>
                </li>
                <li>
                    <a id='nav' href='/#'>Email</a>
                </li>
                <li>
                <li>
                    <a id='nav' href='/#'>Linkedin</a>
                </li>
                    <a id='nav' href='/#'>Address</a>
                </li>
                <li>
                    <a id='nav' href='/#'>Map Directions</a>
                </li>
            </ul>
            </div>
            {/* social List */}
            <div className='socials'>
            <ul>
                <h5>Social Media</h5>
                <li>
                    <a id='nav' href='/#'>Instagram</a>
                </li>
                <li>
                    <a id='nav' href='/#'>Facebook</a>
                </li>
                <li>
                    <a id='nav' href='/#'>Linkedln</a>
                </li>
                <li>
                    <a id='nav' href='/#'>X(formerly Twitter)</a>
                </li>
                <li>
                    <a id='nav' href='/#'>Pintrest</a>
                </li>
            </ul>
            </div>
            </div>
    </Grid>
  );
}