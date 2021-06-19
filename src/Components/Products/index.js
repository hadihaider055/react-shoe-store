import React from "react";
import { ProductsData } from "./productsdata.js";
import "./style.css";
const Products = () => {
  return (
    <div className="products__container">
      {Object.keys(ProductsData).map((item) => {
        const shoe = ProductsData[item];
        return (
          <div key={shoe.name} className="shoe__container">
            <h3 className="shoe__name">{shoe.name}</h3>
            <div className="shoe__img__div">
              <img className="shoe__image" src={shoe.img} alt={shoe.name} />
            </div>
            <div className="card__footer">
              <button className="add__to__cart">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
