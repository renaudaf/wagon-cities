const selectCity = (city) => {
  return {
    type: "SELECT_CITY",
    paylod: city
  };
};

export default selectCity;
