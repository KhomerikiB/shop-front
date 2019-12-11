import React from "react";
import { connect } from "react-redux";
import { getItemById } from "../../../redux/actions/itemsAction";
import { addItemToCart } from "../../../redux/actions/cartAction";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

class ItemInner extends React.Component {
  state = {
    href: "",
    loader: false
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.getItem(id);
  }
  getItem = async id => {
    try {
      await this.props.getItemById(id);
      this.setState({ href: this.props.item.images[0].image });
    } catch (error) {
      console.log(error);
    }
  };
  updateImageHref = href => {
    this.setState({ href });
  };
  addItemToCart = async id => {
    this.setState({ loader: true });
    try {
      await this.props.addItemToCart(id);
      this.setState({ loader: false });
    } catch (error) {
      if (error.status === 400) {
        this.props.history.push("/login");
      }
    }
  };
  render() {
    const { images, type, description, price, _id, title } = this.props.item;
    const { href } = this.state;
    return (
      <div className="inner-item">
        <div className="main-image">
          <div className="mainImage-box">
            <img src={href} alt="acer" />
          </div>
        </div>
        <div className="description-container">
          <div className="thumbnails">
            {images &&
              images.map((image, index) => (
                <div
                  key={index}
                  className="item"
                  onClick={() => this.updateImageHref(image.image)}
                >
                  <img src={image.image} alt="acer" />
                </div>
              ))}
          </div>
          <div className="description-wrapper">
            <div className="price">{price}$</div>
            <p class="title">{title}</p>
            <div className="brand-type">
              {/* <span className="brand">{brand} _ </span> */}
              <span className="type">{type}</span>
            </div>

            <p className="desription">{description}</p>
            <button className="button">
              {this.state.loader ? (
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
                  onClick={() => this.addItemToCart(_id)}
                >
                  Add To Cart
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.items.item
});
export default connect(mapStateToProps, { getItemById, addItemToCart })(
  ItemInner
);
