//import logo from './logo.svg';
//import './App.css';

import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar/>
      <div className="max-w-screen-xl mx-auto">
      
      <Banner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
