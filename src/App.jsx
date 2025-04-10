import React from "react";
import DestinationContainer from "./components/Destinations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Top Travel Destinations</h1>
      <DestinationContainer />
    </div>
  );
}

export default App;