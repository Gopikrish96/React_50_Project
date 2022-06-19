import React from 'react';
import '../Styles/Product.css'
 import { useStateValue } from '../context/StateProvider';


function Product({ id, title, image, rating, price }) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
      dispatch({
          type: "ADD_TO_BASKET",
          item: {
              id: id,
              title:title,
              image: image,
              price: price,
              rating: rating,
          },
      });
  };

  return (

    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">${price}</div>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (<p>🌟 </p>))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>

  );
}

export default Product;