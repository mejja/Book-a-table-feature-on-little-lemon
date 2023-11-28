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
            <ul>
                <h5>Navigation</h5>
                <li>
                    <a className='a' href='/'>Home</a>
                </li>
                <li>
                    <a className='a' href='/about'>About</a>
                </li>
                <li>
                    <a className='a' href='/menu'>Menu</a>
                </li>
                <li>
                    <a className='a' href='/reservations'>Reservations</a>
                </li>
                <li>
                    <a className='a' href='/order'>Order Online</a>
                </li>
                <li>
                    <a className='a' href='/login'>Login</a>
                </li>
            </ul>
            </div>
            <div className='contact'>
            <ul>
                <h5>Contact</h5>
                <li>
                    <a id='nav' href='#'>Phone Number</a>
                </li>
                <li>
                    <a id='nav' href='#'>Email</a>
                </li>
                <li>
                    <a id='nav' href='#'>Address</a>
                </li>
            </ul>
            </div>
            <div className='socials'>
            <ul>
                <h5>Social Media</h5>
                <li>
                    <a id='nav' href='#'>Instagram</a>
                </li>
                <li>
                    <a id='nav' href='#'>Linkedln</a>
                </li>
                <li>
                    <a id='nav' href='#'>Pinterest</a>
                </li>
            </ul>
            </div>
            </div>
    </Grid>
  );
}