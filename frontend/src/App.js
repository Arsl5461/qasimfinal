
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar"
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from "./pages/Home"
import NavbarP from './components/NavbarP';
import HomeMain from './components/HomeMain';
import Footer from './components/Footer';
import About from './components/About';
import Service from './components/Service';
import Team from './components/Team';
import WorkHome from './components/WorkHome';
import ContactUs from './components/Contactus';
import "./App.css"

function App() {
  return (
<>
<Router>
<NavbarP/>
  <Routes>
    <Route exact path="/add-form" element={<Dashboard/>}></Route>
    <Route exact path="/" element={<HomeMain/>}></Route>
    <Route exact path="/home" element={<Home/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/gecq-admin" element={<Login/>}></Route>
    <Route exact path="/about-us" element={<About/>} />
      <Route exact path="/services" element={<Service/>} />
      <Route exact path="/ourteam" element={<Team/>} />
      <Route exact path="/ourwork" element={<WorkHome/>} />
      <Route exact path="/contact-us" element={<ContactUs/>} />

  </Routes>
  <Footer/>
</Router>
<ToastContainer/>
</>   
  );
}

export default App;
