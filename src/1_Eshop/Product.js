import React from 'react';
import './Styles/Product.css'

function Product(props) {
    return (
      <div>
        <div className="product">
          <div className="product__info">
            <p>Title</p>
            <div className="product__price">$100</div>
            <div className="product__rating">⭐⭐⭐⭐ </div>
          </div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            alt=""
          />
          <button>Add to Basket</button>
        </div>
      </div>
    );
}

export default Product;