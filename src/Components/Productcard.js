import React from "react";

import "../styles/Productcard.css";
import { useGlobalContext } from "../utils/context";

const ProductCard = ({ allusers }) => {
  const { Addtocart } = useGlobalContext();
  return (
    <ul className="cards">
      {allusers.map((product) => {
        const {
          id,
          title,
          description,
          discountPercentage,
          thumbnail,
          rating,
          price,
          category,
        } = product;
        return (
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src={thumbnail}
                  alt="mixed vegetable salad in a mason jar."
                />
                <span className="card_price">
                  <span>$</span>
                  {price}
                </span>
              </div>
              <div className="card_content">
                <h2 className="card_title">{title}</h2>
                <div className="card_text">
                  <p>{description}</p>
                  <hr />
                  <p>
                    <strong>Rating : </strong>
                    {rating}
                    <br />
                    <strong>Category : </strong>
                    {category}
                    <br />
                    <strong>Discountpercentage : </strong>
                    {discountPercentage}%
                    <br />
                  </p>
                </div>
                <div className="buttondiv">
                  <button
                    className="button-74"
                    onClick={() => {
                      Addtocart(product);
                      alert(`${title} added to cart`);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductCard;
