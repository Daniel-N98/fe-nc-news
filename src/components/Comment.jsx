import "./style/comments.css";

export default function Comment({ comment }) {
  const dateCreated = new Date(comment.created_at);
  return (
    <div className="comment-card flex flex-column article">
      <p className="comment-body">{comment.body}</p>
      <div className="comment-details">
        <p>{comment.author}</p>
        <p>{` [${dateCreated.getDate()}/${dateCreated.getMonth()}/${dateCreated.getUTCFullYear()}]`}</p>
      </div>
    </div>
  );
}
