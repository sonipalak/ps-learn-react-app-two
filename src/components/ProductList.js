import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts(this.state.currentPage);
  }

  fetchProducts = async (page) => {
    const response = await fetch(`https://dummyjson.com/products?page=${page}`);
    const data = await response.json();
    this.setState({ products: data });
  };

  handleNextClick = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
    this.fetchProducts(currentPage + 1);
  };

  handlePreviousClick = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
      this.fetchProducts(currentPage - 1);
    }
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        {/* Display products */}
        {this.state.products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}

        {/* Next and Previous buttons */}
        <button onClick={this.handlePreviousClick} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default ProductList;