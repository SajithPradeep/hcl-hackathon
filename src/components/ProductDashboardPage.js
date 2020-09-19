import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import ProductDetailsCard from "./ProductDetailsCard";

class ProductDashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/SajithPradeep/product-list/db")
      .then((data) => {
        this.setState(() => {
          return {
            products: data.data.products,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log("added to cart", this.props.productsSelected);
    return (
      <div>
        {this.state.products.map((product) => {
          return <ProductDetailsCard {...product} key={product.id} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productsSelected: state.productsSelected,
  };
};

export default connect(mapStateToProps)(ProductDashboardPage);
