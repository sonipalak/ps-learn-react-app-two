import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge';

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, publishedAt, author, source} = this.props;
    return (
      <div className='item-box'>
        <div className='item-img'>
          <img src={!imageUrl?"https://img.freepik.com/free-vector/no-multiply-font-vector-text-typography_53876-168227.jpg":imageUrl} className="card-img-top" alt="..."/></div>
        <div className='details'>
       
          <h2 className='head'>{title}</h2>
          
          <span className='publishDate'>
          <Badge pill bg="secondary">{source}</Badge> 
            <span>
              <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.5 8C15.5 9.65685 14.1569 11 12.5 11C10.8431 11 9.5 9.65685 9.5 8C9.5 6.34315 10.8431 5 12.5 5C13.2956 5 14.0587 5.31607 14.6213 5.87868C15.1839 6.44129 15.5 7.20435 15.5 8Z" stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 14H9C7.61929 14 6.5 15.1193 6.5 16.5C6.5 17.8807 7.61929 19 9 19H16C17.3807 19 18.5 17.8807 18.5 16.5C18.5 15.1193 17.3807 14 16 14V14Z" stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {!author?"Unknown":author}
            </span> 
            <span>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#616161" strokeWidth="2" strokeLinecap="round"/>
              <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#616161"/>
              <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#616161"/>
              <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#616161"/>
            </svg>
              {/*{!publishedAt?"Published Not Available":publishedAt} 
               {new publishedAt(publishedAt)d.toGMTString()} */}
              {new Date(publishedAt).toGMTString("lookup")}
            </span>
          </span>
          <p className='description'>
            {!description?"Description Not Available":description} <a rel="noreferrer" href={newsUrl} target='_blank'>Read More</a>
            
          </p>
        </div>
      </div>
    )
  }
}
