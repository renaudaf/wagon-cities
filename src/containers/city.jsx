import React from "react";

const City = (props) => {
  const handleClick = () => {
    if (props.selectCity) {
      props.selectCity(props.city);
    }
  };
  return (
    <li className="list-group-item" onClick={handleClick}>{props.city.name}</li>
  );
};

export default City;
