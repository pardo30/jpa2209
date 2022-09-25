import React from "react";
import {
  BrowserRouter as Router,
  //Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import { Navbar } from "./Components/Navbar";
import Acuarelas from "./Pages/Acuarelas";
import Grabados from "./Pages/Grabados";



function App() {
  return (
    <div className="App">
    <Router>
      <div className="AppNavbar">
        <Navbar/>
      </div>
      <div className="AppPages">
        <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route path="/grabados" element={<Grabados />} />
        <Route path="/acuarelas" element={<Acuarelas />} />
        <Route path="/esmaltes" element={<p>Esmaltes</p>} />
        <Route path="/otrastecnicas" element={<p>Otras técnicas</p>} />
        <Route path="/about" element={<p>About</p>} />
     </Routes>
     </div>
    </Router>
    </div>
  );
}

export default App;
