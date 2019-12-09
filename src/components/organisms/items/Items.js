import React from "react";
import Item from "./item";
import { connect } from "react-redux";
import { getItems } from "../../../redux/actions/itemsAction";
class Items extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    return (
      <div className="items-wrapper">
        <div className="grid">
          {this.props.items.allItems.map(item => (
            <Item data={item} key={item._id} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state.items
});
export default connect(mapStateToProps, { getItems })(Items);
