import "./ProductList.css";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api.service";
import ProductCard from "./product-card/ProductCard";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: aquamarine;
  margin-top: 200px;
`;

export default function ProductList({logOut}) {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
   getProducts()
   .then(products => {
     (setProductList(products))
     console.log(products)
   })
   .catch((e) => {
     if (e.response.status === 401) {
        logOut()
     } else {
       setError(true)
     }
   })
  }, []);

  if (error) {
    return <div>There was an error sending the request</div>;
  }

  if (productList.length === 0) {
    return (<div>
       <RingLoader
          css={override}
          size={150}
          color={"pink"}
        />
    </div>);
  } else {
    return <div className="ProductList ">
      {productList.map(product => {
        return (
          <ProductCard 
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          user={product.user}
          description={product.description}
        />
        )  
      })}
    </div>;
  }
}
