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
                <a href="\#" className={`${buttonClassName}-view view-icon`} onClick={this.viewToggle}>
                    <svg className='list-icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#585DCD" strokeWidth="2"/>
                        <path d="M16 10L8 10" stroke="#585DCD" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M16 14L8 14" stroke="#585DCD" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <svg className='grid-icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke="#585DCD" strokeWidth="2"/>
                        <path d="M12 3V21" stroke="#585DCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12L3 12" stroke="#585DCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {buttonClassName} View
                </a>
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
