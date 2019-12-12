/* eslint-disable no-undef */
import React, { useEffect } from "react";

import { connect } from "react-redux";

import {
  getItemsByCategory,
  getItems,
  removeFilteredItems
} from "../../../redux/actions/itemsAction";

import Item from "./item";

const Items = ({
  removeFilteredItems,
  getItems,
  getItemsByCategory,
  ...props
}) => {
  useEffect(() => {
    const slug = props.match.params.id;
    if (slug) {
      getItemsByCategory(slug);
    } else {
      removeFilteredItems();
      if (props.generalItems.length === 0) getItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.pathname]);
  return (
    <div className="items-wrapper">
      <div className="grid">
        {props.items.map(data => {
          return <Item props={props} data={data} key={data._id} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  const allItem = state.items.allItems;
  const filteredArray = state.items.filteredArray;
  const items =
    filteredArray && filteredArray.length > 0 ? filteredArray : allItem;

  return {
    items,
    generalItems: state.items.allItems
  };
};

const mapDispatchToProps = dispatch => ({
  getItemsByCategory(id) {
    dispatch(getItemsByCategory(id));
  },
  getItems() {
    dispatch(getItems());
  },
  removeFilteredItems() {
    dispatch(removeFilteredItems());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
