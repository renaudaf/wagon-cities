import React from "react";
import City from "./city";

const CityList = (props) => {
  const cityArr = props.cities;
  const cities = cityArr.map((city) => {
    return (
      <City key={city.name} city={city} selectCity={props.selectCity} />
    );
  });
  return (
    <ul className="list-group cities">
      {cities}
    </ul>
  );
};


export default CityList;
