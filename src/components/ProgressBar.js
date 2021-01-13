import React from "react";

const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: 20,
    width: "20rem",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "auto",
    // border: "2px solid #1b1b1b",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    // textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles} />
      </div>
    </div>
  );
};

export default ProgressBar;
