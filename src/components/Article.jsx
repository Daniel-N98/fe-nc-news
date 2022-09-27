import "./style/articleView.css";

export default function Article(props) {
  const article = props.children;
  const dateCreated = new Date(article.created_at);
  return (
    <main id="full-article" className="text-center flex flex-column">
      <h1>{article.title}</h1>
      <section id="article-body">{article.body}</section>
      <ul className="flex">
        <li>
          Published by: <span>{article.author}</span>
        </li>
        <li>
          Topic: <span>{article.topic}</span>
        </li>
        <li>
          Published on:
          <span>{` [${dateCreated.getDate()}/${dateCreated.getMonth()}/${dateCreated.getUTCFullYear()}]`}</span>
        </li>
      </ul>
    </main>
  );
}
