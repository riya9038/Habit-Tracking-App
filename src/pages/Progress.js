// import Calendar from "react-calendar";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "./Calender";

const Progress=(props)=>{
    const [showCalender,setshowCalender]= useState(false);
    const location=useLocation();
    const history= useNavigate();
    console.log("location",location);
    const {title,date} =location.state;

    const handleClick=()=>{
        console.log("locationinhandleclick",location.state);
        history("/calender",{state:location.state});
    }

    
    return(
        <div className="progress">
            <div className="title">
                <img src="https://practicalpie.com/wp-content/uploads/2019/02/habit.png" alt=""></img>
                Title:{title}
            </div>
            <span>Start Date:{date}</span>
            <span>Maximum Streak:</span>
            <span>Missed count:</span>
            <span>Last activity:{date}</span>
            {/* <button className="showCalender" onClick={()=>setshowCalender(true)}> Show Calender </button> */}
            {/* {showCalender && <Calendar date={date}/>} */}
            {/* {showCalender && <Calendar tileContent={({ calDate, view }) => view === 'month' && calDate.getDate() === new Date(date).getDate() ? <p>It's Sunday!</p> : null}/>} */}
            {/* <Link to="/calender" className="showCalender">Show Calender</Link> */}
            <button className="showCalender" onClick={()=>handleClick()}> Show Calender </button>
        </div>
    )
}
export default Progress;