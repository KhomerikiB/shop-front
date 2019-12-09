import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { withRouter } from "react-router-dom";
const Item = props => {
  const getDetailInfo = id => {
    props.history.push(`/item/${id}`);
  };
  return (
    <div className="product-item" onClick={() => getDetailInfo(props.data._id)}>
      <div className="cart-box flex-center">
        <FaCartPlus color="white" size="25" />
      </div>
      <div className="product-item__image">
        <img src={props.data.images[0].image} alt={props.data.type} />
      </div>
      <div className="product-item__desc">
        <p className="type">{props.data.type}</p>
        <div className="flex-space">
          <p className="description">{props.data.description}</p>
          <p className="price">
            {props.data.price}
            <span>$</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Item);
