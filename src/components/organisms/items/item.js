import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { connect } from "react-redux";
import { addItemToCart } from "../../../redux/actions/cartAction";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const Item = props => {
  const [loader, setLoader] = useState(false);
  const getDetailInfo = id => {
    props.history.push(`/item/${id}`);
  };
  const addItemToCart = async id => {
    setLoader(true);
    try {
      await props.addItemToCart(id);
      setLoader(false);
    } catch (error) {
      if (error.status === 400) {
        props.history.push("/login");
      }
    }
  };
  return (
    <div className="product-item">
      {loader ? (
        <div className="loader-container flex-center">
          <Loader
            type="Circles"
            color="#fff"
            height={40}
            width={40}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        <div
          className="cart-box flex-center"
          onClick={() => addItemToCart(props.data._id)}
        >
          <FaCartPlus color="white" size="25" />
        </div>
      )}
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
