import { useParams } from "react-router-dom";
import ArticlesList from "./ArticleList";

export default function TopicArticles() {
  const { topic } = useParams();
  return <ArticlesList topic={topic} />;
}
