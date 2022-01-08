import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="container">
            <ul className="habit-list">
                <Link to="/progress" className="habits"><li>
                   Habit 01
                </li></Link>
                <Link to="/progress" className="habits"><li>
                   Habit 01
                </li></Link>
                <Link to="/progress" className="habits"><li>
                   Habit 01
                </li></Link>
                <Link to="/progress" className="habits"><li>
                   Habit 01
                </li></Link>
                <Link to="/progress" className="habits"><li>
                   Habit 01
                </li></Link>
                <Link to="/progress" className="habits"><li>
                   Habit 01
                </li></Link>
                
            </ul>
        </div>
    )
}
export default Home;