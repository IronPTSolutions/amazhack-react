import "./ProductList.scss";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api.service";
import ProductCard from "./product-card/ProductCard";

export default function ProductList({ onLogOut }) {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getProducts()
      .then((products) => setProductList(products))
      .catch((e) => {
        if (e.response.status === 401) {
          onLogOut();
        } else {
          setError(true);
        }
      });
  }, []);

  if (error) {
    return <div>There was an error sending the request</div>;
  }

  if (productList.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="ProductList">
        {productList.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            user={p.user}
            image={p.image}
            price={p.price}
          />
        ))}
      </div>
    );
  }
}
