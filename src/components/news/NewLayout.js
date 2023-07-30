import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import HeadlineItem from './TopHeadlines/HeadlineItem';

const NewLayout = () => {
  return (
    <>
      <section className='news-banner'>
        <Container>
          <article className='news-inner'>
            <h1 className='title'>News</h1>
          </article>
        </Container>
      </section>
      <section className='news-one-article'>
        <Container>
          <article className='news-link-article'>
            <NavLink to="/news/">general</NavLink>
            <NavLink to="/news/business">business</NavLink>
            <NavLink to="/news/entertainment">entertainment</NavLink>
            <NavLink to="/news/science">science</NavLink>
            <NavLink to="/news/health">health</NavLink>
            <NavLink to="/news/sports">sports</NavLink>
            <NavLink to="/news/technology">technology</NavLink>
          </article>
          <article className='news-one-card'>
            {/* <NewsList pageSize={pageSize} country={country} category="general" /> */}
            <HeadlineItem />
          </article>
        </Container>
      </section>
      <Outlet />
    </>
  )
}
export default NewLayout