
import './App.css';
import Navbar from './Navbar'
import Logo from './Logo';
import Home from './Home';
import Book from './Book';
import Condition from './Condition';
import Services from './Services';
import BookAppointment from './BookAppointment';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
   <Router>
     <Navbar/>
     <Logo/>
   <Routes>
   <Route exact path="/"
   element={<>
   <Book/>
   <Home/>
   <Condition/>
   <Services/></>} />
  
   <Route exact path="/bookappointment"
      element={<BookAppointment/>}/>
   
   
   </Routes>
   {/* <Condition/>
  <Services/>  */}
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3777.987407558813!2d98.9933669!3d18.7540995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ1JzE0LjciTiA5OMKwNTknNDQuMCJF!5e0!3m2!1sid!2s!4v1469346687955" width="600" height="450" frameborder="0" style="border:0" ></iframe> */}

   </Router>
  );
}

export default App;
