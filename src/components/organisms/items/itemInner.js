import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getItemById } from "../../../redux/actions/itemsAction";
import { addItemToCart } from "../../../redux/actions/cartAction";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { TimelineLite, Power3, Power2 } from "gsap";

const ItemInner = props => {
  const [href, setHref] = useState("");
  const [loader, setLoading] = useState(false);
  const [pageLoader, setPageLoader] = useState(true);
  let imageReveal = useRef(null);
  let image = useRef(null);
  let descriptionWrapper = useRef(null);
  let tl = new TimelineLite();
  const getItem = async id => {
    try {
      setPageLoader(true);
      await props.getItemById(id);
      // setHref(props.item.images[0].image);
      setPageLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(CustomEase);
    const id = props.match.params.id;
    getItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id, props.history.location.pathname]);
  useEffect(() => {
    if (!pageLoader) {
      tl.to(imageReveal, 0.5, {
        opacity: 0,
        ease: Power2.easeIn
      })
        .to(image, 0.8, {
          scale: 1,
          delay: -0.9,
          opacity: 1,
          ease: Power3.easeInOut
        })
        .to(descriptionWrapper, 0.7, {
          opacity: 1,
          x: 0,
          ease: Power3.ease,
          delay: -1
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageLoader, props.location.pathname]);
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
    <div className={`inner-item top-wrapper ${pageLoader ? "loading" : ""}`}>
      {pageLoader ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)"
          }}
        >
          {" "}
          <Loader type="Circles" color="#3a68f1" height={150} width={150} />
        </div>
      ) : (
        <>
          <div className="main-image">
            <div className="mainImage-box">
              <div
                className="animation-block"
                ref={el => {
                  imageReveal = el;
                }}
              ></div>
              {href ? (
                <img src={href} alt="acer" />
              ) : (
                images && (
                  <img
                    src={images[0].image}
                    alt="acer"
                    ref={el => {
                      image = el;
                    }}
                    style={{ opacity: 0 }}
                  />
                )
              )}
            </div>
          </div>
          <div
            className="description-container"
            ref={el => {
              descriptionWrapper = el;
            }}
          >
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
                    color="#3a68f1"
                    height={35}
                    width={35}
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
        </>
      )}
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
