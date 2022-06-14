import React from 'react'
import '../Styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 Items ) : <strong>$0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" />This order Contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        thousandSeparator={true}
        displayType={"text"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal