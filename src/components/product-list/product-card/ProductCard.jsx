import "./ProductCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ name, price, user, image, id }) {
  return (
    <div className="ProductCard">
      <div class="card">
        <div
          class="card-img-top"
          style={{ background: `url(${image})`, height: `100px` }}
        ></div>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{price}</p>
          <p class="card-text">{user}</p>
          <div class="card-footer">
            <Link class="text-muted" to={`/products/${id}`} activeClassName="active">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
