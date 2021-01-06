import React, { useState } from 'react';
import CityList from "../containers/city_list";
import ActiveCity from "../containers/active_city";
import citiesD from "../../data/city_data";

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const selectCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="app">
      <CityList cities={citiesD} selectCity={selectCity} />
      <ActiveCity city={selectedCity} />
    </div>
  );
};

export default App;
