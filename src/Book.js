import React from "react";
import { ReactDOM } from "react";
import './Book.css';
import { Link,BrowserRouter as Router, useNavigate} from "react-router-dom";
function Book()
{
    const navigate=useNavigate();
 
return(
<div className="booking"><button className="bookButton" onClick={()=>navigate('/bookappointment')}>Book Appointment</button></div>
)
}
export default Book;