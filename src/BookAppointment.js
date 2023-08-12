import React, { useState } from "react";
import { ReactDOM } from "react";
import './BookAppointment.css';
import Calendar from "react-calendar";
import './Calendar.css';
function BookAppointment()
{   
    const [value,setValue]=useState();
   
    const [time,setTime]  =useState("11:00");
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [mob,setMobile]=useState("");
    console.log(time);
    const handlesubmit=(e)=>
    { 
        e.preventDefault();
        console.log(value);
        console.log(time);
        console.log(name);
        console.log(address);
        console.log(mob);

    }
    const nameChange=(e)=>
    { 
        e.preventDefault();
        setName(e.target.value);
    }
    const addressChange=(e)=>
    { e.preventDefault();
        setAddress(e.target.value);
    }
    const handle=(e)=>
    { e.preventDefault();
        setTime(e.target.value);
    }
    const mobileChange=(e)=>
    { e.preventDefault();
        setMobile(e.target.value);
    }
    
    return (
        <>        <form className="bookingform" onSubmit={handlesubmit}>
                    <div className="bookingformcontainer">
                        <div className="containsnameandcalenar">
                        <div className="detailsname">
           <div><input type="text" placeholder="Name" required value={name} onChange={nameChange}></input></div> 
           <div><input type="text" placeholder="Address" value={address} onChange={addressChange}></input></div> 
           <div><input type="text" placeholder="Mobile Number" required value={mob} onChange={mobileChange}></input></div> 
           </div>
        <Calendar onChange={setValue} value={value}  tileDisabled={({date,view})=>date.getDay()===6}/>
        <div className="timing"><input className="timinginput"type="time" value={time} onChange={handle} min="10:00" max="19:00"></input></div>

   </div>
        </div>
        <div className="submitbutton"><input  className="subimtbuttoninput" type="submit" ></input></div>
        </form>
    
         
        </>
    )

}
export default BookAppointment;