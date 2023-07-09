import React, { Component } from 'react'
import NewItem from '../news/NewsItem'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Loading from '../_shared/Loading';

export default class NewsList extends Component {

    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`
    }
    async getNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9d2e5a3b7ae4c3f97da7aa735015c83&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        this.getNews()
    }
    heandleNextClick = async ()=>{
        this.setState({page: this.state.page + 1})
        this.getNews()
    }
    heandlePrevClick = async ()=>{
        this.setState({page: this.state.page - 1})
        this.getNews()
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
                                source={element.source.name}
                            />
                        </Col>
                    })}
                </Row>
                <Row className='pb-5'>
                    <Col xs={6} md={4}>
                        <Button size="sm" disabled={this.state.page<=1} onClick={this.heandlePrevClick} variant="primary">
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Prev
                        </Button>
                    </Col>
                    <Col xs={6} md={{ span: 4, offset: 4 }} className='text-end'>
                        <Button size="sm" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.heandleNextClick} variant="primary">
                            Next
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Button>
                    </Col>
                </Row>
            </>
        )
    }
}
