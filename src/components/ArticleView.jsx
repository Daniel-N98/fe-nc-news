import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Article from "./Article";
import { fetchArticleById } from "./utilities/requests";
import "./style/articleView.css";
import CommentList from "./CommentList";
import ErrorScreen from "./ErrorScreen";
import { indicateLoading } from "./utilities/utilityFunctions";

export default function ArticleView() {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { article_id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch(() => {
        setError(<ErrorScreen type={"article"} />);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return indicateLoading();
  }

  if (error) {
    return error;
  }

  return (
    <section>
      <main id="article-view" className="article">
        <button id="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <Article article={article} setArticle={setArticle}></Article>
      </main>
      <CommentList article_id={article_id} />
    </section>
  );
}
