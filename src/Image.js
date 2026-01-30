import React from "react";
import product from "./product";

function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="product-image"
      style={{ width: "100%", height: "auto", borderRadius: "8px 8px 0 0" }}
    />
  );
}

export default Image;
