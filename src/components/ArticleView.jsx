import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Article from "./Article";
import { fetchArticleById } from "./utilities/requests";
import "./style/articleView.css";

export default function ArticleView() {
  const [article, setArticle] = useState([]);

  const navigate = useNavigate();

  const { article_id } = useParams();
  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <section id="article-view" className="article">
      <button id="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <Article
        article={article}
        setArticle={setArticle}
      ></Article>
    </section>
  );
}
