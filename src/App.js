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
import intrusos from "./Data/intrusos.json";
import carburundum from "./Data/carburundum.json";
import maneranegra from "./Data/maneranegra.json";
import xilografias from "./Data/xilografia.json";



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
        <Route path="/acuarelas" element={<Page data={acuarelas} technique='ACUARELAS' />} />
        <Route path="/esmaltes" element={<Page data={esmaltes} technique='ESMALTES'/>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/grabados/aguafuerteyaguatinta" element={<Page data={aguafuerteyaguatinta} technique='AGUAFUERTE Y AGUATINTA'/>} />
        <Route path="/grabados/intrusos" element={<Page data={intrusos} technique='SERIE INTRUSOS'/>} />
        <Route path="/grabados/carburundum" element={<Page data={carburundum} technique='CARBURUNDUM'/>} />
        <Route path="/grabados/maneranegra" element={<Page data={maneranegra} technique='MANERA NEGRA'/>} />
        <Route path="/grabados/xilografias" element={<Page data={xilografias} technique='XILOGRAFÍAS'/>} />
        <Route path="/grabados/felicitaciones" element={<Page data={felicitaciones} technique='FELICITACIONES NAVIDEÑAS'/>} />
     </Routes>
     </div>
    </Router>
    </div>
  );
}

export default App;
