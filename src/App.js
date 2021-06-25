import React from "react";

import Dateview from "./components/DateView";
import Navbar from "./components/Navbar";
import './App.css'
import './index.css'
import Cards from "./components/Cards";
import AddBtn from "./components/AddBtn";


function App() {
  return (
    <div className="container">
      <div className="top-ctn">
        <Navbar />
        <Dateview />
      </div>
      <div className="bottom-ctn">
        <Cards />
        <AddBtn />
      </div>
    </div>
  );
}

export default App;
