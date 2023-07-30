import React from "react";
import Container from "react-bootstrap/Container";
import HeadlineItem from "./news/TopHeadlines/HeadlineItem";

const Home = () => {
  return (
    <div className="home-banner">
      <Container>
        <HeadlineItem />
      </Container>
    </div>
  );
};
export default Home;
