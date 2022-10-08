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
        <Route path="/acuarelas" element={<Page data={acuarelas} />} />
        <Route path="/esmaltes" element={<Page data={esmaltes} />} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/grabados/aguafuerteyaguatinta" element={<Page data={aguafuerteyaguatinta} />} />
        <Route path="/grabados/intrusos" element={<Page data={intrusos} />} />
        <Route path="/grabados/carburundum" element={<Page data={carburundum} />} />
        <Route path="/grabados/maneranegra" element={<Page data={maneranegra} />} />
        <Route path="/grabados/xilografias" element={<Page data={xilografias} />} />
        <Route path="/grabados/felicitaciones" element={<Page data={felicitaciones} />} />
     </Routes>
     </div>
    </Router>
    </div>
  );
}

export default App;
