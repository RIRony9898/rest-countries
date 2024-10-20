import "./Country.css";

const Country = ({ country, handleVisitedCountry, isVisited }) => {
  const handleButtonClick = () => {
    handleVisitedCountry(country);
  };

  return (
    <div className={`country ${isVisited ? "visited" : ""}`}>
      <img src={country.flags.png} alt={country.name.common} className="flag-image" />
      <h3>{country.name.common}</h3>
      <button onClick={handleButtonClick}>{isVisited ? "Unvisited" : "Visited"}</button>
    </div>
  );
};

export default Country;