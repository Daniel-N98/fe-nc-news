import { useContext, useState } from "react";
import userContext from "../contexts/userContext";
import { postArticleComment } from "./utilities/requests";

export default function PostCommentForm({ setComments, article_id }) {
  const user = useContext(userContext);
  const [error, setError] = useState(false);

  const handleComment = (event) => {
    event.preventDefault();
    const comment = event.target[0];
    const valid = validate(comment);
    if (valid) {
      setError(false);
      valid.username = user;
      comment.classList.add("small-green-border");
      comment.value = "";
      postComment(article_id, valid, setComments);
    } else {
      setError(true);
      comment.classList.add("small-red-border");
    }
  };

  return (
    <section id="post-comment-section" className="comment-card article">
      <h4>Post a new comment..</h4>
      {error ? <p style={{ color: "red" }}>Please enter a comment</p> : ""}
      <form onSubmit={(event) => handleComment(event)}>
        <label htmlFor="comment-body" />
        <textarea
          type="textarea"
          name="comment-body"
          className="small-border"
        />
        <input type="submit" />
      </form>
    </section>
  );
}

function postComment(article_id, comment, setComments) {
  postArticleComment(article_id, comment)
    .then(() => {
      setComments((currentComments) => [
        {
          comment_id: Math.random() * 100,
          author: comment.username,
          body: comment.body,
          created_at: Date.now(),
          votes: 0,
        },
        ...currentComments,
      ]);
    })
    .catch((error) => {});
}

function validate(comment) {
  if (!comment.value) {
    comment.classList.add("small-red-border");
    return false;
  }
  comment.classList.remove("small-red-border");
  const commentObj = { body: comment.value };
  return commentObj;
}
