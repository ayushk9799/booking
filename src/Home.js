import React from "react";
import { ReactDOM } from "react";
import './Home.css'
import VerticalComponent from "./VerticalComponent";
function Home()
{
    return(<>
   <div className="aboutheading"><p>About</p></div>
   <div className="cardAndTimeline">
   <div className="card"><div className="profileContain"><img className="profile" src="profile.png"/></div><div className="names"><div className="name">Dr. Rajan Kumar Sinha</div><div className="degree">MBBS,MS(General surgery),Mch(Urology)</div></div><div className="description"><p>Dr. Sinha has expertise in <b>Endourology, Reconstructive Urology, , Urological Oncology, Andrology</b> as well as <b>Laparoscopic Urological Surgery</b>.
He has done his schooling from <b>Sainik School Tilaiya (Jharkhand)</b>. Then he passed M.B.B.S. (2005) followed by <b>MS (General Surgery)</b> in 2010 from <b>RIMS, Ranchi, Jharkhand</b>. After his Master's Degree he worked as Senior Resident in Deptartment of Urology at <b>IGIMS, Patna (2011-12)</b>. Thereafter, He pursued <b>M.Ch</b> in <b>Urology</b>      from <b>CNMCH</b>, Kolkata (2013-15). </p></div>
</div>
{/* <VerticalComponent/> */}
</div>
    </>)
}
export default Home;