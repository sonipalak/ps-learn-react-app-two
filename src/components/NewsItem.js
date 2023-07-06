import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let { image, title, description, newsUrl, publishedAt} = this.props;
    return (
      <div className='item-box'>
        <div className='item-img'><img src={!image?"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png":image} alt={title} /></div>
        <div className='details'>
          <h2 className='head'>{title}</h2>
          <span className='publishDate'>{!publishedAt?"Data Not Available":publishedAt}</span>
          <p className='description'>
            {!description?"No Description Available...":description} <a rel="noreferrer" href={newsUrl} target='_blank'>Read More</a>
          </p>
          
        </div>
      </div>
    )
  }
}
