import React from 'react'
import '../Styles/CheckoutProduct.css'

function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
            <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">Title</p>
                <p className="checkoutProduct__price">$20</p>
                <div className="checkoutProduct__rating">🌟 </div>
                <button>Remove the Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct