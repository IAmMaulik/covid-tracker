import "./App.css";
import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);

  // API URL: https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    // The code inside here will run once when the component
    // loads and never again
    // It will be an async function

    const getCountriesName = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesName();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>

        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* LOOP THROUGH THE COUNTRIES AND ADD THEM AS MenuItems */}

            {countries.map((country) => {
              return <MenuItem value={country.value}>{country.name}</MenuItem>;
            })}

            {/* <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">Op 2</MenuItem>
            <MenuItem value="worldwide">option three</MenuItem>
            <MenuItem value="worldwide">option 4 here</MenuItem> */}
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
