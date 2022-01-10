import { Link } from "react-router-dom";
import Habit from "./Habit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home=()=>{

   const dispatch = useDispatch();
   const HabitList = useSelector((state) => state.habits.list);
    const history = useNavigate();

    const handleClick=(habit)=>{
       console.log("checkstate",habit);
        history("/progress",{state:habit});
    }
    return(
      <div className="container">
         <ul className="habit-list">
           {HabitList.map((habit,index)=>(
              <li className="habits" onClick={()=>handleClick(habit)}>{habit.title}</li>
           ))}
           </ul>

           <Link to="/addHabit" className="add">Add</Link>
           {HabitList.length ===0?<div className="message">Add a new habit</div>:null}
        </div>
    )
}
export default Home;