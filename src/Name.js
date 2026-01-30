// Import React library
import React from "react";
// Import product data
import product from "./product";

// Name component - displays the product name
function Name() {
  return <h2 className="product-name">{product.name}</h2>;
}

// Export the Name component
export default Name;
