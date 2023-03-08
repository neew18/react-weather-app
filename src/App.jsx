import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="container App">
      <Weather defaultCity="New York" />
      <Footer />
    </div>
  );
}

export default App;
