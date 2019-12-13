import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getItemById } from "../../../redux/actions/itemsAction";
import { addItemToCart } from "../../../redux/actions/cartAction";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

const ItemInner = props => {
  const [href, setHref] = useState("");
  const [loader, setLoading] = useState(false);
  const getItem = async id => {
    try {
      await props.getItemById(id);
      setHref(props.item.images[0].image);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const id = props.match.params.id;
    getItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.item._id, props.history.location.pathname]);

  const updateImageHref = href => {
    setHref(href);
  };
  const addItemToCart = async id => {
    setLoading(true);
    try {
      await props.addItemToCart(id);
      setLoading(false);
    } catch (error) {
      if (error.status === 400) {
        props.history.push("/login");
      }
    }
  };
  const { images, type, description, price, _id, title } = props.item;
  return (
    <div className="inner-item">
      <div className="main-image">
        <div className="mainImage-box">
          {href ? <img src={href} alt="acer" /> : "Loading..."}
        </div>
      </div>
      <div className="description-container">
        <div className="thumbnails">
          {images &&
            images.map((image, index) => (
              <div
                key={index}
                className="item"
                onClick={() => updateImageHref(image.image)}
              >
                <img src={image.image} alt="acer" />
              </div>
            ))}
        </div>
        <div className="description-wrapper">
          <div className="price">{price}$</div>
          <p className="title">{title}</p>
          <div className="brand-type">
            {/* <span className="brand">{brand} _ </span> */}
            <span className="type">{type}</span>
          </div>

          <p className="desription">{description}</p>
          <button className="button">
            {loader ? (
              <Loader
                type="Circles"
                color="#fff"
                height={35}
                width={35}
                timeout={3000} //3 secs
              />
            ) : (
              <div
                className="flex-center"
                style={{ height: "100%" }}
                onClick={() => addItemToCart(_id)}
              >
                Add To Cart
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    item: state.items.item
  };
};
export default connect(mapStateToProps, { getItemById, addItemToCart })(
  ItemInner
);
