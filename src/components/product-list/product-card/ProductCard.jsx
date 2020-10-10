import "./ProductCard.scss";
import React from "react";

export default function ProductCard({ name, price, user, image }) {
  return (
    <div className="ProductCard">
      <div
        className="ProductCard__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="ProductCard__name">{name}</div>
      <div className="ProductCard__price">{price}</div>
      <div className="ProductCard__user">{user.name}</div>
      <button className="ProductCard__button">View detail</button>
    </div>
  );
}
