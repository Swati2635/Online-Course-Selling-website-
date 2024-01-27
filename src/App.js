
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
//import {useState} from 'react';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import CourseDetails from './Components/CourseDetails/courseDetails';
function App() {

  return (
    <div className='App' >
      <Router>
        <Header />
        <Routes>
        
          <Route path="/" exact element={<Home/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/coursesDetails/:id" element={<CourseDetails />} />
        </Routes>
        
      </Router>
      <Footer />
      
      {/* <Footer/> */}
   
    </div>
  );
}

export default App;
