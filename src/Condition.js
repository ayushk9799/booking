import React from "react";
import { ReactDOM } from "react";
import './Condition.css';
import { useState } from "react";
function Condition()
{  const [conditionClick,setCondition]=useState(true);

 function handleCondition()

    {    
         setCondition(!conditionClick);
        //   console.log(.style.display)
    
     }

return(<>
<div className="aboutcondition" onClick={handleCondition} >Conditions <div className="arrowimg"><img className="arrow"src="./up-arrow.png"/></div></div>
<div className="conditions" style={{display:conditionClick?"none":"block"}}>
    <div className="condition"><div className="overactivebladder"><img className="overactivebladderimg" src="./overactivebladder.jpg"/></div><div className="descriptors"><h3>Overactive Bladder</h3></div><div className="explained"><p>If you have an overactive bladder, you may:
       <ul>
        <li>Feel a sudden urge to urinate that's difficult to control</li>
        <li>Experience unintentional loss of urine immediately after an urgent need to urinate (urgency incontinence)</li>
        <li>Urinate frequently, usually eight or more times in 24 hours</li>
        </ul> </p></div></div>
    <div className="condition"><div className="overactivebladder"><img className="overactivebladderimg" src="./kidneyCancer.jpg"/></div><div className="descriptors"><h3>Kidney Cancer</h3></div><div className="explained"><p>Kidney cancer usually doesn't have signs or symptoms in its early stages. In time, signs and symptoms may develop, including:
        <ul>
            <li>Blood in your urine, which may appear pink, red or cola colored</li>
            <li>Pain in your back or side that doesn't go away</li>
            <li>Loss of appetite</li>
            <li>Unexplained weight loss</li>
            <li>Tiredness</li>
            </ul></p></div></div>
    <div className="condition">
    <div className="overactivebladder"><img className="overactivebladderimg" src="./kidneyStones.jpg"/></div><div className="descriptors"><h3>Kidney Stones</h3></div><div className="explained"><p>A kidney stone usually will not cause symptoms until it moves around within the kidney or passes into one of the ureters. The ureters are the tubes that connect the kidneys and bladder.
If a kidney stone becomes lodged in the ureters, it may block the flow of urine and cause the kidney to swell and the ureter to spasm, which can be very painful. At that point, you may experience these symptoms:
        <ul>
            <li>Severe, sharp pain in the side and back, below the ribs
</li>
            <li>Pain that radiates to the lower abdomen and groin</li>
            <li>Pain that comes in waves and fluctuates in intensity</li>
            <li>Pain or burning sensation while urinating</li>
            <li>A persistent need to urinate, urinating more often than usual or urinating in small amounts</li>
            <li>Fever and chills if an infection is present</li>
            </ul>  </p></div>
    </div>
    <div className="condition"></div>
    <div className="condition"></div>
</div>
</>)
}
export default Condition;