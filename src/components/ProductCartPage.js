import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/products";
import { updateGrandTotal } from "../actions/grandTotal";

class ProductCartPage extends React.Component {
  componentDidMount() {
    let grandTotal = this.props.productsSelected.reduce((acc, currVal) => {
      return acc + currVal.price * currVal.qty;
    }, 0);
    this.props.dispatch(updateGrandTotal(grandTotal));
  }

  componentDidUpdate() {
    let grandTotal = this.props.productsSelected.reduce((acc, currVal) => {
      return acc + currVal.price * currVal.qty;
    }, 0);
    this.props.dispatch(updateGrandTotal(grandTotal));
  }

  removeItemFromCart = (id) => {
    this.props.dispatch(removeItem(id));
  };

  render() {
    return (
      <div>
        <h2>Cart</h2>
        {this.props.productsSelected.map((product) => {
          return (
            <div key={product.id}>
              <p>Name: {product.name}</p>
              <p>Price per piece: {product.price}</p>
              <p>Quantity Selected: {product.qty}</p>
              <p>Total Price: {product.price * product.qty}</p>
              <button onClick={() => this.removeItemFromCart(product.id)}>
                Remove
              </button>
            </div>
          );
        })}
        <h2>Grand Total: {this.props.grandTotal}</h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productsSelected: state.productsSelected,
    grandTotal: state.grandTotal,
  };
};
export default connect(mapStateToProps)(ProductCartPage);
