import React, { useEffect } from "react";
import { connect } from "react-redux";

const Items = props => {
  useEffect(() => {
    console.log("241", props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>items</div>;
};

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  getItemsByCategory(id) {
    dispatch.getItemsByCategory(id);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
