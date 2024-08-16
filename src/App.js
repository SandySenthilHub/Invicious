import "./App.css";
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <CustomCursor /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
