import "./App.css";
import React from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">Op 2</MenuItem>
            <MenuItem value="worldwide">option three</MenuItem>
            <MenuItem value="worldwide">option 4 here</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* HEADER */}
      {/* TITLE + SELECT INPUT DROPDOWN FIELDS */}

      {/* INFO BOXES */}
      {/* INFO BOXES */}
      {/* INFO BOXES */}

      {/* TABLE */}
      {/* GRAPH */}

      {/* MAP */}
    </div>
  );
}

export default App;
