import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ProductFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://dummyjson.com/products/categories')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        this.setState({ categories: data });
      })
      .catch(error => {
        console.log('Error occurred:', error);
      });
  }
  
 
  render() {
    const { categories } = this.state;
    return (
      <div>
        <h2>Filter By Category</h2>
        <ul className='filter-list'>
          {categories.map(category => (
            <li className='' key={category.id}>
              <Link to='/products'>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
