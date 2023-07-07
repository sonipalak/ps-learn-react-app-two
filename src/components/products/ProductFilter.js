import React, { Component } from 'react'


export default class ProductFilter extends Component {
  constructor(){
    super();
    this.state = {
      category: []
    }
  }
 
  render() {
    return (
      <div>
        Filter By Category
        {this.state.category.map((element) => {
          return <div>
            {element.category}
          </div>
        })}
      </div>
    )
  }
}
