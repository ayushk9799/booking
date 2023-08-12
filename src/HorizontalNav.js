import React from "react";
import { ReactDOM } from "react";
import './HorizontalNav.css'
function HorizontalNav(props)
{    
    if(props.buttons===true)
    {
    return(<>


    <div className='hmenu'>
    <ul className='hlist'>
       <li>Home</li>
       <li>services</li>
       <li>Book appointment</li>
       <li>Contact</li>
       <li>More</li>
    </ul>
    </div></>);
    }
}
export default HorizontalNav;