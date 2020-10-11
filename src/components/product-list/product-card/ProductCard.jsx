import './ProductCard.css'
import React from "react";

export default function ProductCard({ name, price, user, image }) {
  return <div className=" ">
    <div className="card my-5" style={{width: "18rem;"}}>
      <img className="card-img-top" src={image} alt="Card image cap" />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        {/* <a href="#" className="btn btn-primary">{user}</a> */}
      </div>
    </div>
  </div>;
}
