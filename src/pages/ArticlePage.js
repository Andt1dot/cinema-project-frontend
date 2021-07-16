import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";

const ArticlePage = () => {
  const { news } = useSelector((state) => ({
    news: state.News.news,
  }));
  console.log(news);

  const params = useParams();

  const newsArticle = news.find((article) => article._id === params.news_id);
  //console.log("article", newsArticle);

  return (
    <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
      <h1>{newsArticle.title}</h1>{" "}
      <img
        src={newsArticle.image_url}
        style={{ width: "100%", margin: 0 }}
        alt="news-article"
      />
      <h2>{newsArticle.subtitle}</h2>
      <p>{newsArticle.content}</p>
    </Container>
  );
};

export default ArticlePage;
