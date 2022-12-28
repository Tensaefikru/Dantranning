import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
<Header />
<div className='max-w-screen-md mx-auto pt-20'>
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<AboutUs />} />
    <Route path='/courses' element={<Courses />} />

  </Routes>
</div>
</Router>


  );
}

export default App;
