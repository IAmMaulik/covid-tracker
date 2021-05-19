import "./App.css";
import React from "react";
import Dropdown from "./components/Dropdown";
import Infobox from "./components/Infobox";
import Map from "./components/Map";
import { Card, CardContent } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <div className="app__left">
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

        {/* MAP */}
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          {/* TABLE */}
          <h3>Live new cases</h3>

          {/* GRAPH */}
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
