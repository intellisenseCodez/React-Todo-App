import React from "react";

import Dateview from "./components/DateView";
import Navbar from "./components/Navbar";
import './App.css'
import './index.css'
import Cards from "./components/Cards";



function App() {
  return (
    <div className="container">
      <div className="top-ctn">
        <Navbar />
        <Dateview />
      </div>
      <div className="bottom-ctn">
        <Cards />
      </div>
    </div>
  );
}

export default App;
