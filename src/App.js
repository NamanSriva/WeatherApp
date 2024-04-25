import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        
         Developed by{" "}
        <a target="_blank" href="#">
          Naman Srivastava
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;