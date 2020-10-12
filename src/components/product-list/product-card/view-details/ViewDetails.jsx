import "./ViewDetails.css";
import React, { useEffect, useState } from "react";
import { getOneProduct } from "../../../../services/api.service";
import { Redirect } from "react-router-dom";

export default function ViewDetails(props) {
    const [productDetails, setProduct] = useState(undefined);
    const [error, setError] = useState();

    useEffect(() => {
        getOneProduct(props.match.params.id)
          .then((product) => setProduct(product))
          .catch((e) => {
            if (e.response.status === 401) {
              console.log("not working");
            } else {
              setError(true);
            }
          });
      }, []);

      if (!props.user) {
        return <Redirect to="/login" />;
      }

      if (productDetails === undefined) {
        return <div>Loading...</div>;
      } else {
  return (
    <div className="ProductCard">
      <div class="card">
        <div
          class="card-img-top"
          style={{ background: `url(${productDetails.image})`, height: `100px` }}
        ></div>
        <div class="card-body">
          <h5 class="card-title">{productDetails.name}</h5>
          <p class="card-text">{productDetails.price}</p>
          <p class="card-text">{productDetails.user}</p>
          <p class="card-text">{productDetails.description}</p>
        </div>
      </div>
    </div>
        );
    }
}