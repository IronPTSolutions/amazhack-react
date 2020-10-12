import "./ViewDetails.css";
import React, { useEffect, useState } from "react";
import { getOneProduct } from "../../../../services/api.service";
import { Redirect } from "react-router-dom";
import Reviews from "./reviews/Reviews";

export default function ViewDetails(props) {
  const [productDetails, setProduct] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getOneProduct(props.match.params.id)
      .then((product) => {
        setProduct(product)
      })
      .catch((error) => console.log(error))
  });

  if (!props.user) {
    return <Redirect to="/login" />;
  }

  if (productDetails === []) {
    return <div>Loading...</div>;
  } else {
    let averageRate = 0
    if (productDetails.reviews?.length != 0) {
      averageRate = (productDetails.reviews?.reduce((accum, current) => {
        return current.score + accum
      }, 0) / productDetails.reviews?.length).toFixed(1)
    }
    return (
      <div className="ProductCard ViewDetails">
        <div className="card">
          <div
            className="card-img-top"
            style={{ background: `url(${productDetails.image})`, height: `100px` }}
          ></div>
          <div className="card-body">
            <h5 className="card-title">{productDetails.name}</h5>
            <p className="card-text">{productDetails.price}€</p>
            <p className="card-text">{productDetails.user?.name}</p>
            <p className="card-text">{productDetails.description}</p>
            <p className="card-text">Average: {averageRate}</p>
            <Reviews reviews={productDetails.reviews} />
          </div>
        </div>
      </div>
    );
  }
}