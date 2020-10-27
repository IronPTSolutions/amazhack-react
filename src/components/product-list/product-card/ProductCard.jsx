import "./ProductCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ name, price, user, image, id }) {
  return (
    <div className="ProductCard">
      <div className="card">
        <div
          className="card-img-top"
          style={{ background: `url(${image})`, height: `150px`, backgroundSize: 'cover' }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}€</p>
          <p className="card-text">{user}</p>
          <div className="card-footer">
            <Link className="text-muted" to={`/products/${id}`} activeClassName="active">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
