import "./ProductList.css";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api.service";
import ProductCard from "./product-card/ProductCard";
import { Redirect } from "react-router-dom";

export default function ProductList({ user, onLogOut }) {
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

  if (!user) {
    return <Redirect to="/login" />;
  }

  if (productList.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="ProductList">
        <div class="card-group">
          {productList.map((p) => {
            return (
              <ProductCard
                key={p.id}
                name={p.name}
                user={p.user.name}
                image={p.image}
                price={p.price}
                id={p.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
