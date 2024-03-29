import React from "react";

const ItemsList = ({ children }) => {
  return (
    <div
      style={{ minHeight: "80vh" }}
      className="container-fluid pt-3 bg-light"
    >
      <div className="row">{children}</div>
    </div>
  );
};

export default ItemsList;
