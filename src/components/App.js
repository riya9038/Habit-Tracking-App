import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Calender from "../pages/Calender";
import Progress from '../pages/Progress';
import NewHabit from '../pages/NewHabit';
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
          <Route path='/calender' element={<Calender/>} />
          <Route path='/addHabit' element={<NewHabit/>} />
          {/* <Route  element={<Home/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
