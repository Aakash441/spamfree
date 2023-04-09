import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Footer from "./components/Footer";
import Info from "./components/Info";
import Service from "./components/Service";
import Navbar from "./components/navbar";
import Aboutus from "./components/Aboutus";
import "./styles/App.scss";
import "./styles/Nav.scss";
import "./styles/info.scss"
import "./styles/footer.scss"
import "./styles/services.scss"
import "./styles/aboutus.scss"
function App() {
  return (
    <Router>
     <Navbar />
     
      <Routes>
        
      <Route path="/" element={<Info />} />
        <Route path="/services" element={<Service />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </Router>
  
  );
}

export default App;
