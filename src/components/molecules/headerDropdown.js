import React, { useEffect, useRef, useState } from "react";
import { TimelineMax, Power2 } from "gsap";
import { Link } from "react-router-dom";
const HeaderDropdown = props => {
  let dropdown = useRef(null);
  let bgWrapper = useRef(null);
  let headerItems = useRef(null);
  const [tl, setTl] = useState(new TimelineMax({ paused: true }));
  useEffect(() => {
    setTl(
      tl
        .to(bgWrapper, 0.2, {
          opacity: 1,
          pointerEvents: "fill",
          ease: Power2.easeIn
        })
        .to(dropdown, 0.7, {
          maxHeight: "1000px",
          ease: Power2.easeIn,
          delay: -0.1
        })
        .to(headerItems, 0.5, {
          y: 0,
          opacity: 1,
          ease: Power2.ease
        })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const mouseEnter = () => {
    tl.play();
  };
  const mouseLeave = () => {
    tl.reverse();
  };
  const resetAnimation = () => {
    tl.reverse();
  };
  const { title, categories } = props;
  return (
    <>
      <div
        className="bg-wrapper"
        ref={el => {
          bgWrapper = el;
        }}
      ></div>
      <div
        className="header-dropdown-main-wrapper"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <div className="category-item">{title}</div>
        <div className="header-dropdown" ref={el => (dropdown = el)}>
          <div
            className="header-items-wrapper"
            ref={el => {
              headerItems = el;
            }}
          >
            {categories &&
              categories.map(category => (
                <Link
                  to={`/category/${category._id}`}
                  className="item"
                  onClick={resetAnimation}
                  key={category._id}
                >
                  <div className="image-wrapper">
                    <img
                      src="https://www.etq-amsterdam.com/wp-content/uploads/2018/02/ETQ-Amsterdam-Low-1-White-fit-7-750x0-c-default.jpg"
                      alt=""
                    />
                  </div>
                  <p className="item-link">{category.name}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderDropdown;
