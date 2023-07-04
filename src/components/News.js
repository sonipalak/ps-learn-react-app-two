import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            loading: false,
            listView: true
        }
    }
    async componentDidMount() {
        let url = "https://dummyjson.com/products?limit=6";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ products: parsedData.products })
    }
    
    viewToggle = () => {
        console.log('View');
        this.setState((prevState) => ({
            listView: !prevState.listView,
        }));
    }
  
    render() {
        const {listView} = this.state;
        const buttonClassName = listView ? 'list' : 'grid'; 
        return (
            <div>
                <h1>News List</h1>
                <p onClick={this.viewToggle}>{buttonClassName}</p>
                <div className={`${buttonClassName}-view`}>
                    {this.state.products.map((element) => {
                        return <div key={element.id}>
                            <NewsItem
                                title={element.title}
                                description={element.description}
                                category={element.category}
                                price={element.price}
                                disPrice={element.discountPercentage}
                                rating={element.rating}
                                stock={element.stock}
                                brand={element.brand}
                            />
                        </div>
                    })}
                </div>
                <div className='btn-list'>
                    <button disabled>Prev</button>
                    <button>Next</button>
                </div>
            </div>
        )
    }
}
