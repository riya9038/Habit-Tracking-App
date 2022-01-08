import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Habit from "../pages/Habit";
import Progress from '../pages/Progress';
const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/progress' element={<Progress/>} />
          <Route path='/calender' element={<Habit/>} />
          {/* <Route  element={<Home/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
