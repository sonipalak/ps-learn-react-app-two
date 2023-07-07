import React, { Component } from 'react'
import NewItem from '../news/NewsItem'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Loading from '../_shared/Loading';

export default class NewsList extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9d2e5a3b7ae4c3f97da7aa735015c83&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: true});
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    heandleNextClick = async () =>{
        console.log("Next")
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9d2e5a3b7ae4c3f97da7aa735015c83&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            })
        }
    }
    heandlePrevClick = async () =>{
        console.log("Next")
        if(!(this.state.page - 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9d2e5a3b7ae4c3f97da7aa735015c83&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            })
        }
    }
    render() {
        return (
            <>
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
                <Row className='pb-5'>
                    <Col xs={6} md={4}><Button onClick={this.heandlePrevClick} disabled={this.state.page<=1} variant="primary">Prev</Button></Col>
                    <Col xs={6} md={{ span: 4, offset: 4 }} className='text-end'><Button onClick={this.heandleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} variant="primary">Next</Button></Col>
                </Row>
            </>
        )
    }
}
