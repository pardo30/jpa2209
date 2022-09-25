import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route path="/about" element={<p>About</p>} />
      </Routes>
    </Router>
  );
}

export default App;
