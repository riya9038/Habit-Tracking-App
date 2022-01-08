import { Link } from "react-router-dom";

const Progress=()=>{
    return(
        <div className="progress">
            <div className="title">
                <img src="https://practicalpie.com/wp-content/uploads/2019/02/habit.png" alt=""></img>
                Title:
            </div>
            <span>Start Date:</span>
            <span>Maximum Streak:</span>
            <span>Missed count:</span>
            <span>Last activity:</span>
            <Link to="/calender" className="showCalender">Show Calender</Link>
        </div>
    )
}
export default Progress;