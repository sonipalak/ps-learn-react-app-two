import React, { Component } from 'react'
import NewItem from '../news/NewsItem'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../_shared/Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsList extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ loading: true });
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loader: false
            })
      };
    render() {
        return (
            <>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults }
                    loader={<div className='item-loading'><Loading /></div>}
                >
                    <div className='container'>
                    <Row className='news-article'>
                        {this.state.loading && <Loading />}
                        {this.state.articles.map((element) => {
                            return <Col className='mb-4' xs={12} md={4} key={element.url}>
                                <NewItem
                                    title={element.title}
                                    description={element.description}
                                    publishedAt={element.publishedAt}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                />
                            </Col>
                        })}
                    </Row>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}


