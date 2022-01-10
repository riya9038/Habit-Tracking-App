import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Habit=(props)=>{
    console.log("props",props);
    const {title} = props.habit;
    const history = useNavigate();

    const handleClick=()=>{
        history("/progress",{state:props});
    }

    return(
        <div className="habit-list">
            <li className="habits" onClick={()=>handleClick()}>{title}</li>
            
        </div>
    )
}
export default Habit;