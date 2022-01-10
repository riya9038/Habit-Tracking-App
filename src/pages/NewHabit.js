
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";
import { addHabitToList } from "../actions";
const NewHabit=()=>{

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const dispatch = useDispatch();
    const history= useNavigate();

    const handleClick=()=>{
        if(title && date){
        dispatch(addHabitToList({title,date,week:[{DATE:date,STATUS:"none"}]}))
        history("/")
    }}

    return(
        <div className="new">
            <div className="box">
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required></input>
                <input type="date" placeholder="Start Date" onChange={(e) => setDate(e.target.value)} required></input>

                <button className="set" onClick={()=>handleClick()}> Set </button>
            </div>
        </div>
    )
}
export default NewHabit;