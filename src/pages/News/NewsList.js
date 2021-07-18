import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../actions/News";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import FilterCustom from "../../components/FilterCustom";

const NewsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const { news, loading, error } = useSelector((state) => ({
    news: state.News.news,
    error: state.News.error,
    loading: state.News.loading,
  }));

  return (
    <>
      <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
        {loading ? (
          <div>Loading...</div>
        ) : !loading && news ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <span
                style={{ padding: 10, fontSize: "30px", textAlign: "center" }}
              >
                News
              </span>
              <FilterCustom
                addButtonTitle="Add Article"
                pathName="/admin/news/news-add"
              />
            </div>
            <Row xs={1} md={3}>
              {news.map((article, idx) => {
                return (
                  <Col key={idx}>
                    <Card style={{ color: "black" }}>
                      <Card.Img variant="top" src={article.image_url} />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.subtitle}</Card.Text>
                        <Link to={`/admin/news/${article._id}`}>
                          <Button variant="primary">Vezi Articol</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </>
        ) : (
          <div>{error}</div>
        )}
      </Container>
    </>
  );
};

export default NewsList;
