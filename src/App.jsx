import "./App.css";
import React from "react";
import Dropdown from "./components/Dropdown";
import Infobox from "./components/Infobox";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        <Dropdown />
      </div>

      {/* INFO BOXES */}
      <div className="app__stats">
        <Infobox title="Coronavirus Cases" cases="1234" total="235245123" />
        <Infobox title="Recovered" cases="1234" total="235245123" />
        <Infobox title="Deaths" cases="1234" total="235245123" />
      </div>

      {/* TABLE */}
      {/* GRAPH */}

      {/* MAP */}
    </div>
  );
}

export default App;
