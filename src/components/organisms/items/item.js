import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../../redux/actions/cartAction";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Item = props => {
  const getDetailInfo = id => {
    props.props.history.push({
      pathname: `/item/${id}/${props.data.category}`,
      state: {
        history: { path: props.props.location.pathname }
      }
    });
  };
  return (
    <div className="product-item">
      <div
        className="product-item__image"
        onClick={() => getDetailInfo(props.data._id)}
      >
        <img src={props.data.images[0].image} alt={props.data.type} />
      </div>
      <div
        className="product-item__desc"
        onClick={() => getDetailInfo(props.data._id)}
      >
        <p className="type">{props.data.brand}</p>
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
export default connect(null, { addItemToCart })(Item);
