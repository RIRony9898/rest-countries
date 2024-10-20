import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    if (visitedCountries.some((visitedCountry) => visitedCountry.cca3 === country.cca3)) {
      const updatedVisitedCountries = visitedCountries.filter(
        (visitedCountry) => visitedCountry.cca3 !== country.cca3
      );
      setVisitedCountries(updatedVisitedCountries);
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div style={{ textAlign: "left" }}>
        <h2>Visited Countries: {visitedCountries.length}</h2>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries">
        {countries.map((country, index) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
            isVisited={visitedCountries.some((visitedCountry) => visitedCountry.cca3 === country.cca3)}
            className={`country-${index % 3 + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;