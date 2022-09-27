import { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import Loading from "./Loading";
import { fetchAllArticles } from "./resources/utilities/requests";
import "./style/articles.css";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-ali-center flex-column">
        <h2 className="text-center">Loading...</h2>
        <Loading className="loading-icon" />
      </div>
    );
  }
  return (
    <section className="articles-list">
      {articles.map((articleObj) => (
        <ArticlePreview key={articleObj.article_id} article={articleObj} />
      ))}
    </section>
  );
}
