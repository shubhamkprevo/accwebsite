import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/header/Header";
import Home from "./components/HOME/Home";
import Vgallery from "./components/VGallery/Vgallery";

function App() {
  return (
    <div>
       <Header/>
      
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/vgallery" element={<Vgallery />} />
        </Routes>
      
  
   <Footer/>
  
 
     
    </div>
  );
}

export default App;
