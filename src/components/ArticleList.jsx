import { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import { fetchAllArticles } from "./utilities/requests";
import "./style/articles.css";
import { indicateLoading } from "./utilities/utilityFunctions";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";

export default function ArticlesList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("votes");
  const [orderBy, setOrderBy] = useState("DESC");

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles(topic, sortBy, orderBy).then(
      (sortedArticles) => {
        setArticles(sortedArticles);
        setIsLoading(false);
      }
    );
  }, [topic, sortBy, orderBy]);

  if (isLoading) {
    return indicateLoading();
  }

  return (
    <section className="articles-list">
      <section id="sort-options" className="flex">
        <label htmlFor="sort-by" />
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        <label htmlFor="order-by" />
        <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
      </section>
      {articles.map((articleObj) => (
        <ArticlePreview key={articleObj.article_id} article={articleObj} />
      ))}
    </section>
  );
}
