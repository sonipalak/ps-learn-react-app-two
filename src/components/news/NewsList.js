import React, { useEffect, useState } from 'react'
import NewItem from '../news/NewsItem'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../_shared/Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const NewsList = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    return (
        <>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<div className='item-loading'><Loading /></div>}
            >
                <div className='container'>
                    <Row className='news-article'>
                        {loading && <Loading />}
                        {articles.map((element) => {
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

NewsList.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

NewsList.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default NewsList