import "./ProductCard.css";
import React from "react";

export default function ProductCard({ name, price, user, image }) {
  return <div className="ProductCard">
    <div style={{background: `url(${image})`, height: `100px`}}></div>
    <div>{name}</div>
    <div>{price}</div>
    <div>{user}</div>
  </div>;
}
