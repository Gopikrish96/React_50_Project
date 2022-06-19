import React from 'react'
import { useStateValue } from '../context/StateProvider'
import '../Styles/CheckoutProduct.css'

function CheckoutProduct({id,title,price,rating,image}) {

    const [{basket}, dispatch] = useStateValue();

    const removeToBasket = () =>{
        dispatch({
            type : "REMOVE_TO_BASKET",
            item:{
                id:id,
                price:price,
                rating:rating,
                title:title,
                image:image
            }
        })
    }
    
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">${price}</p>
                <div className="checkoutProduct__rating">{Array(rating).fill().map((_,i) => <p>🌟</p>)} </div>
                <button onClick={removeToBasket}>Remove the Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct