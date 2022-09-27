import "./style/articles.css";

export default function ArticlePreview({ article }) {
  return (
    <div className="article text-center flex">
      <h3>{article.title}</h3>
      <div className="article-info flex">
        <p>Likes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
        <button>View article</button>
      </div>
    </div>
  );
}
