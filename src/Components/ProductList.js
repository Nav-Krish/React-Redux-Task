import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";
import { products } from "../redux/products";
import "./ProductList.css";

// This is HomePage Component used to display the product in the card
// with the help of ProductCard component

const ProductList = ({ addToCart }) => {
  return (
    <div className="container-fluid bg-dark text-white">
      <h2 className="text-center pt-3 mx-auto">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div
            className="col-12 col-lg-4 col-md-6"
            key={product.id}
          >
            <div className="card my-4">
              <div className="card-header">
                <img
                  className="card-img-top"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bolder">{product.title}</h5>
                <span className="rating fw-bold me-2">⭐ {product.rating}</span>
                <p className="card-text text-black fw-bolder fs-5">
                  $ {product.price}
                </p>
              </div>
              <button
                onClick={() => addToCart(product)}
                type="button"
                className="btn btn-primary w-40 mx-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(ProductList);