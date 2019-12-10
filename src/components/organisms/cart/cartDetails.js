import React, { useState, useEffect } from "react";
import { removeItemFromCart } from "../../../redux/actions/cartAction";
import { connect } from "react-redux";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
const CartDetails = props => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    props.cart.forEach(item => {
      price += item.productId.price;
    });
    setTotalPrice(price);
  }, [props.cart]);
  const removeItem = id => {
    props.removeItemFromCart(id);
  };
  const renderCartItems = () =>
    props.cart
      ? props.cart.map(item => (
          <div className="item" key={item._id}>
            <Link to={`/item/${item.productId._id}`}>
              <div className="imagebox">
                <img
                  src={item.productId.images[0].image}
                  alt={item.productId.brand}
                />
              </div>
            </Link>
            <Link to={`/item/${item.productId._id}`}>
              <p className="product-title">{item.productId.title}</p>
            </Link>
            <div className="quantity">
              <span className="small-text">quantity: </span>
              {item.quantity}
            </div>
            <div className="pricebox">
              <span className="currency">$</span>
              {item.productId.price}
            </div>
            <div className="close-btn" onClick={() => removeItem(item._id)}>
              <MdClose size="25" />
            </div>
          </div>
        ))
      : "";
  return (
    <div className="main-container cart-details">
      <p className="title">Shopping Cart</p>
      <div className="cart-header flex-space">
        <div className="sub-total">
          <span className="small-text">Subtotal:</span>
          <span className="value">${totalPrice}</span>
        </div>
        <button className="button order">Order</button>
      </div>
      <div className="items-wrapper">{renderCartItems()}</div>
    </div>
  );
};
const mapStateToProps = state => ({
  cart: state.cart.carts
});
export default connect(mapStateToProps, { removeItemFromCart })(CartDetails);
