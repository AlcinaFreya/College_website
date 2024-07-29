import React from 'react'
import Contact from './components/Contact'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HeaderA from './components/HeaderA';
import Academics from './components/Academics';
import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Events from './components/Events';
import Placements from './components/Placements';
//import DrawerComp from './components/Drawer';
import HomePage from './components/HomePage';
import Admission from './components/Admission';
import AcademicCalender from './components/AcademicCalender';
import ProfessionalAssociation from './components/ProfessionalAssociation';
import HallTicket from './components/HallTicket';
import Result from './components/Result';
import TimeTable from './components/TimeTable';
import Office from './components/Office';
import LoginA from './components/LoginA';
import Civil from './components/Civil';
import ComputerScience from './components/CompuerScience';
import Ece from './components/Ece';
import Home from './components/Home';
import Mechanical from './components/Mechanical';
//import Carousel from './components/Carousel';
//import CardSlider from './components/CardSlider';
import FormSkct from './components/FormSkct';
import Library from './components/Library';
import Industryconnect from './components/Industryconnect';
import Industrysupportedlabs from './components/Industrysupportedlabs';
import Rating1 from './components/Rating1';
import NewEvvents from './components/NewEvvents';
import PaymentPage from './components/PaymentPage';
import Upi from './components/Upi';
import PaymentForm from './components/PaymentSuccess';
import ELibrary from './components/Elibrary';
import CheckoutPage from './components/CheckoutPage';
import BookReceiptPage from './components/BookReceiptPage';
import Table from './components/Table';
import LoginLib from './components/LoginLib';
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/headera' element={<HeaderA/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/academics' element={<Academics/>}/>
          <Route path='/academicscalender' element={<AcademicCalender/>}/>
          <Route path='/professional' element={<ProfessionalAssociation/>}/>
          <Route path='/admission' element={<Admission/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/placements' element={<Placements/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/hallticket' element={<HallTicket/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/timetable' element={<TimeTable/>}/>
          <Route path='/office' element={<Office/>}/>
          <Route path='/logina' element={<LoginA/>}/>
          <Route path='/civil' element={<Civil/>}/>
          <Route path='/computerscience' element={<ComputerScience/>}/>
          <Route path='/ece' element={<Ece/>}/>
           <Route path='/mechanical' element={<Mechanical/>}/> 
           <Route path='/formskct' element={<FormSkct/>}/> 
           <Route path='/library' element={<Library/>}/> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/industryconnect' element={<Industryconnect/>}/>
          <Route path='/industrysup' element={<Industrysupportedlabs/>}/>
          <Route path='/rating' element={<Rating1/>}/>
          <Route path='/newsevvents' element={<NewEvvents/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/upi' element={<Upi/>}/>
          <Route path='/success' element={<PaymentForm/>}/>
          <Route path='/elib' element={<ELibrary/>}/>
          <Route path='/check' element={<CheckoutPage/>}/>
          <Route path='/rec' element={<BookReceiptPage/>}/>
          <Route path='/hostel' element={<Table/>}/>
          <Route path='/loge' element={<LoginLib/>}/>
      </Routes>
  </BrowserRouter>  
    </div>
  )
}

export default App