import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            listView: true,
            page: 1
        }
    }
    async componentDidMount() {
        //let url = "https://dummyjson.com/products?limit=3";
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=74061ece1a214520b228b91690ef4400&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ 
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    
    viewToggle = () => {
        this.setState((prevState) => ({
            listView: !prevState.listView,
        }));
    }

    heandleNextClick = async () => {
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=74061ece1a214520b228b91690ef4400&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    heandlePrevClick = async () => {
        console.log("Prev");
        if(!(this.state.page - 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=74061ece1a214520b228b91690ef4400&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
  
    render() {
        const {listView} = this.state;
        const buttonClassName = listView ? 'grid' : 'list'; 
        return (
            <div>
                <h1>News List</h1>
                <p onClick={this.viewToggle}>{buttonClassName}</p>
                {this.state.loading && <Loading />}
                <div className={`${buttonClassName}-view`}>
                    {this.state.articles.map((element) => {
                        return <div key={element.url}>
                            <NewsItem
                                image={element.urlToImage}
                                title={element.title}
                                publishedAt={element.publishedAt}
                                description={element.description}
                                newsUrl={element.url}
                            />
                        </div>
                    })}
                </div>
                <div className='btn-list'>
                    <button disabled={this.state.page<=1} onClick={this.heandlePrevClick}>Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.heandleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}
