import React from 'react';
import '../Styles/Product.css'

function Product({id,title,image,rating,price}) {

    return (
      
        <div className="product">
          <div className="product__info">
            <p>{title}</p>
            <div className="product__price">${price}</div>
            <div className="product__rating">
              {Array(rating).fill().map((_,i) => (<p>🌟 </p>))}
            </div>
          </div>
          <img
            src={image}
            alt=""
          />
          <button>Add to Basket</button>
        </div>
      
    );
}

export default Product;