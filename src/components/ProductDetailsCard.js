import React from "react";
import { connect } from "react-redux";
import { addToCart, updateProductInCart } from "../actions/products";

class ProductDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
  }
  decrementQty = () => {
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  incrementQty = () => {
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  addToCart = (id, qty) => {
    let product = {
      id,
      qty,
      name: this.props.name,
      price: this.props.price,
    };
    let updateflag = this.props.productsSelected.find((product) => {
      return product.id === id;
    });
    console.log("update flag", updateflag);
    if (updateflag) {
      return this.props.dispatch(updateProductInCart(id, product));
    }
    return this.props.dispatch(addToCart(product));
  };
  render() {
    return (
      <div className="product-card">
        <h3 className="title">Name: {this.props.name}</h3>
        <p className="secondary-text">Price: {this.props.price}</p>
        <div className="increment-decrement-button">
          {this.state.qty > 0 ? (
            <button className="decrement" onClick={this.decrementQty}>
              -
            </button>
          ) : (
            <button className="decrement-disabled">-</button>
          )}
          <span>Quantity: </span>
          <span>{this.state.qty}</span>
          <button className="Increment" onClick={this.incrementQty}>
            +
          </button>
        </div>
        <button onClick={() => this.addToCart(this.props.id, this.state.qty)}>
          Add to Cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsSelected: state.productsSelected,
  };
};

export default connect(mapStateToProps)(ProductDetailsCard);
