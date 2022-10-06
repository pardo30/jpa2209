import React from "react";
import {
  BrowserRouter as Router,
  //Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import { Navbar } from "./Components/Navbar";
import Grabados from "./Pages/Grabados";
import Page from "./Components/Page";
// Import JSON
import acuarelas from "./Data/Acuarelas.json";
import esmaltes from "./Data/Esmaltes.json";
import felicitaciones from "./Data/Felicitaciones.json";
import aguafuerteyaguatinta from "./Data/aguafuerteyaguatinta.json";


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
        <Route path="/acuarelas" element={<Page data={acuarelas} />} />
        <Route path="/esmaltes" element={<Page data={esmaltes} />} />
        <Route path="/felicitaciones" element={<Page data={felicitaciones} />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/grabados/aguafuerteyaguatinta" element={<Page data={aguafuerteyaguatinta} />} />
        <Route path="/about" element={<p>About</p>} />

     </Routes>
     </div>
    </Router>
    </div>
  );
}

export default App;
