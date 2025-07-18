import React from "react";
import { Link } from "react-router-dom";
function Checkout(){
    return(
        <div className="submit">
            <Link to="/cart" className="submit">Place Order</Link>
            <h3>Your order id placed Success fully </h3>
            <h3>Happy shopping 😍</h3>
               
            
        </div>
    )
}
export default Checkout;