
import { weekdays } from 'moment';
import { useState } from 'react';
import { Link,useLocation,useNavigate } from "react-router-dom";
function Calender(props){

  const location= useLocation();
  console.log("location",location);
  const {title,date,week} =location.state;
  const [showModal,setShowModal]=useState(false);
  const [status,setStatus]=useState("")
  console.log("render");
    return (
        <div className="calender">
        {/* {
          [0,1,2,3,4,5,6].map((val,index)=>{
          let currentDate= new Date(date);
          currentDate.setDate(currentDate.getDate()+val);
          week.push({DATE:currentDate.getDate(),STATUS:"none"});
          console.log("week");
          return "";
          })} */}
          {week.map((value)=>{
          return <>
          <div className='day'>
          <div className='week'>
            {value.DATE.toString().substring(0,3)}
          </div>
          <div className='date' onClick={()=>setShowModal(true)}>
            {value.DATE}
            {status}
          </div>
          </div>
        </>
          })
        }
        {showModal && <div className='modal'>
          <button className='modalName'onClick={()=>{setShowModal(false);setStatus("Done")}}>Done</button>
          <button className='modalName'onClick={()=>{setShowModal(false);setStatus("Not Done")}}> Not Done</button>
          <button className='modalName'onClick={()=>{setShowModal(false);setStatus("None")}}>None</button>
        </div>
        }   

        </div>
      );
}
export default Calender;