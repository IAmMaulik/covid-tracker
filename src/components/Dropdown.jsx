import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";

const Dropdown = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");

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

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => {
              return <MenuItem value={country.value}>{country.name}</MenuItem>;
            })}
          </Select>
        </FormControl>

    </div>
  );
};

export default Dropdown;
