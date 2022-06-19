import React from 'react'
import '../Styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../context/Reducer'
import { useStateValue } from '../context/StateProvider'

function Subtotal() {
  const [{basket} ,dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 Items ) : <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" />This order Contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        displayType={"text"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal