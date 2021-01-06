import React from "react";

const ActiveCity = (props) => {
  const city = props.city;
  console.log(city);
  if (!city) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${city.slug}`;

  return (
    <div className="active-city">
      <h3>{city.name}</h3>
      <p>{city.address}</p>
      <img src={url} width="100%" alt="ville" />
    </div>
  );
};

export default ActiveCity;
