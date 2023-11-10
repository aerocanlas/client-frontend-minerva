import React from "react";
import { Link } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <h3>Oh no, your Cart is empty</h3>
      <p>Seems like you have not added anything to your cart yet.</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
        Explore Menu
      </Link>
    </React.Fragment>
  );
}

export default EmptyCart;
