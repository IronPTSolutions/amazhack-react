import "./ViewDetails.css";
import React, { useEffect, useState } from "react";
import { getOneProduct } from "../../../../services/api.service";
import { Redirect } from "react-router-dom";

export default function ViewDetails(props) {
    const [productDetails, setProduct] = useState([]);
    const [error, setError] = useState();    


    useEffect(() => {
        getOneProduct(props.match.params.id)
          .then((product) => {
            setProduct(product)
          })
          .catch((error) => console.log(error))
      },);

      if (!props.user) {
        return <Redirect to="/login" />;
      }

      if (productDetails === []) {
        return <div>Loading...</div>;
      } else {
  return (
    <div className="ProductCard">
      <div className="card">
        <div
          className="card-img-top"
          style={{ background: `url(${productDetails.image})`, height: `100px` }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{productDetails.name}</h5>
          <p className="card-text">{productDetails.price}</p>
          <p className="card-text">{productDetails.user}</p>
          <p className="card-text">{productDetails.description}</p>
        </div>
      </div>
    </div>
        );
    }
}