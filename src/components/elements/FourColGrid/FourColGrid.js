import React from "react";
import "./FourColGrid.css";

const FourColGrid = (props) => {
  const renderElements = () => {
    console.log(props.children);
    const gridElements = props.children.map((element, index) => {
      return (
        <div key={index} className="rmdb-grid-element">
          {element}
        </div>
      );
    });
    return gridElements;
    console.log(gridElements);
  };
  return (
    <div className="rmdb-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content">{renderElements()}</div>
    </div>
  );
};
export default FourColGrid;
