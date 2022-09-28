import { useState } from "react";
import LikeButton from "./LikeButton";
import "./style/articleView.css";
import { updateArticleVotes } from "./utilities/requests";

export default function Article({ article, setArticle }) {
  const dateCreated = new Date(article.created_at);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      updateArticleVotes(article.article_id, 1).catch(() => {
        setHasVoted(false);
      });
      setHasVoted(true);
    }
  };

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
      <section id="like-section" className="flex flex-ali-center">
        <span onClick={() => handleVote()}>
          <LikeButton fill={hasVoted ? "#26abFF" : "#FFF"}>Vote</LikeButton>
          <p>{article.votes}</p>
        </span>
      </section>
    </main>
  );
}
