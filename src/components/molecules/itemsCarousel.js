import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { withRouter } from "react-router-dom";
const ItemCarousel = props => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const changeRoute = (id, category) => {
    if (props.location.state) {
      props.history.push({
        pathname: `/item/${id}/${category}`,
        state: {
          history: { path: props.location.state.history.path }
        }
      });
    } else {
      props.history.push(`/item/${id}/${category}`);
    }
  };
  return (
    <div className="innerIitems-carousel-wrapper">
      <p className="sub-title">You might also like</p>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        containerClass="innerItems-container"
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
      >
        {props.items &&
          props.items.map(item => (
            <div
              className="carousel-item"
              onClick={() => changeRoute(item._id, item.category)}
              key={item._id}
            >
              <div className="imagebox">
                <img src={item.images[0].image} alt="" />
              </div>
              <p className="title">{item.title}</p>
              <p className="price">{item.price}$</p>
            </div>
          ))}
      </Carousel>
    </div>
  );
};
export default withRouter(ItemCarousel);
