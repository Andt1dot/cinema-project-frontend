import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { Container } from "react-bootstrap";
import { deleteNews } from "../../actions/News";
import DeleteModal from "../../components/DeleteModal";

const NewsArticle = () => {
  const { news } = useSelector((state) => ({
    news: state.News.news,
  }));

  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newsArticle = news.find((article) => article._id === params.news_id);

  const handleClickDeleteBtn = () => {
    console.log("articleId", newsArticle._id);
    dispatch(deleteNews(newsArticle._id)).then(() => {
      history.push("/admin/news");
    });
  };

  return (
    <>
      <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to={`/admin/news/news-edit/${newsArticle._id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button className="btn btn-danger" onClick={handleShow}>
            Delete
          </button>
        </div>
        <h1>{newsArticle.title}</h1>{" "}
        <img
          src={newsArticle.image_url}
          style={{ width: "100%", margin: 0 }}
          alt="news-article"
        />
        <h2>{newsArticle.subtitle}</h2>
        <p>{newsArticle.content}</p>
      </Container>
      <DeleteModal
        show={show}
        handleClose={handleClose}
        handleClickDeleteBtn={handleClickDeleteBtn}
        text="Article"
      />
    </>
  );
};

export default NewsArticle;
