import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getSearchedItems,
  restoreSearchedItems
} from "../../redux/actions/searchAction";
const Search = props => {
  const [inputActive, setInputActive] = useState(false);
  const [search, setSearch] = useState("");
  const onFocus = () => {
    setInputActive(true);
  };
  const onBlur = () => {
    setTimeout(() => {
      setInputActive(false);
    }, 200);
  };

  const searchHandler = _.debounce(value => {
    if (value.length > 1) sendRequest(value);
    else props.restoreSearchedItems();
  }, 350);

  const sendRequest = value => {
    props.getSearchedItems({ value, type: true });
  };

  const submitSearch = e => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <>
      <form style={{ height: "100%" }} onSubmit={e => submitSearch(e)}>
        <AiOutlineSearch size="20" />
        <input
          type="text"
          placeholder="Search"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={e => searchHandler(e.target.value)}
        />
        {inputActive && props.filteredItems.length > 0 && (
          <div className="result">
            {props.filteredItems.map(item => (
              <div className="item" key={item._id}>
                <Link to={`/item/${item._id}`}>{item.title}</Link>
              </div>
            ))}
          </div>
        )}
      </form>
    </>
  );
};
const mapStateToProps = state => ({
  filteredItems: state.search.filteredItems
});
const mapDispatchToProps = dispatch => ({
  getSearchedItems(data) {
    dispatch(getSearchedItems(data));
  },
  restoreSearchedItems() {
    dispatch(restoreSearchedItems());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
