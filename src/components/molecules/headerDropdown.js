import React, { useEffect, useRef, useState } from "react";
import { TimelineMax, Power2 } from "gsap";
const HeaderDropdown = () => {
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
        .to(dropdown, 0.8, {
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
        <div className="category-item">Categories</div>
        <div className="header-dropdown" ref={el => (dropdown = el)}>
          <div
            className="header-items-wrapper"
            ref={el => {
              headerItems = el;
            }}
          >
            <div className="item">
              <div className="image-wrapper">
                <img
                  src="https://www.etq-amsterdam.com/wp-content/uploads/2018/02/ETQ-Amsterdam-Low-1-White-fit-7-750x0-c-default.jpg"
                  alt=""
                />
              </div>
              <p className="item-link">agwera</p>
            </div>
            <div className="item">
              <div className="image-wrapper">
                <img
                  src="https://www.etq-amsterdam.com/wp-content/uploads/2018/02/ETQ-Amsterdam-Low-1-White-fit-7-750x0-c-default.jpg"
                  alt=""
                />
              </div>
              <p className="item-link">agwera</p>
            </div>
            <div className="item">
              <div className="image-wrapper">
                <img
                  src="https://www.etq-amsterdam.com/wp-content/uploads/2018/02/ETQ-Amsterdam-Low-1-White-fit-7-750x0-c-default.jpg"
                  alt=""
                />
              </div>
              <p className="item-link">agwera</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderDropdown;
