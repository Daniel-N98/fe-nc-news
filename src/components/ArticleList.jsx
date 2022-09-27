import { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import { fetchAllArticles } from "./utilities/requests";
import "./style/articles.css";
import { indicateLoading } from "./utilities/utilityFunctions";

export default function ArticlesList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles(topic).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [topic]);

  if (isLoading) {
    return indicateLoading();
  }
  return (
    <section className="articles-list">
      {articles.map((articleObj) => (
        <ArticlePreview key={articleObj.article_id} article={articleObj} />
      ))}
    </section>
  );
}
