import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css';
import HorizontalNav from './HorizontalNav.js';

function Navbar()
{
   const [button,setButton]=useState(false);
   const handleClickEvent=()=>
   {
          setButton(!button);
   }
   return(<>
   <nav className='navigation'>
   <div className='contact'>For Best Urologist Services : Contact on </div>
    <div className='menu'>
        <a>Home</a>
        <div className='icon'><button className="navbarbutton"onClick={handleClickEvent}><img className="three" src="./icon.png"/></button></div>
        <div className='services'>
        <a >Services</a>
        <div className='hovered'>
           <a href="#">kjbcjkd</a> 
           <a href="#">kjbcjkd</a> 
           <a href="#">kjbcjkd</a> 
           <a href="#">kjbcjkd</a> 
           <a href="#">kjbcjkd</a> 
        </div>
        </div>
        <a>Book Appointment</a>
        <a>Contact</a>
        <div className='more'>
          <a>More</a> 
          <div className='hoveredmore'>
         <a href="#">Diseases</a>
         <a href="#">Gallery</a>
         </div>
          </div>
    </div>
    </nav>
    <HorizontalNav buttons={button}/>
   </>);
   }
export default Navbar;