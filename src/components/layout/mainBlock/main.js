import React from "react";

const Main = props => {
  console.log(props);
  return (
    <div className="main-wrapper" style={{ paddingLeft: "300px" }}>
      {props.children}
    </div>
  );
};
export default Main;
