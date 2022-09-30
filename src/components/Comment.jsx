import { useContext } from "react";
import userContext from "../contexts/userContext";
import "./style/comments.css";
import { deleteArticleComment } from "./utilities/requests";

export default function Comment({ comment, setComments }) {
  const user = useContext(userContext);

  const handleDelete = () => {
    setComments((currentComments) =>
      currentComments.filter(
        (currentComment) => currentComment.comment_id !== comment.comment_id
      )
    );
    deleteArticleComment(comment.comment_id).catch((error) => {
      setComments((currentComments) => [...currentComments, comment]);
    });
  };

  const dateCreated = new Date(comment.created_at);
  return (
    <li className="comment-card flex flex-column article">
      <p className="comment-body">{comment.body}</p>
      <div className="comment-details">
        <p>{comment.author}</p>
        <p>{` [${dateCreated.getDate()}/${dateCreated.getMonth()}/${dateCreated.getUTCFullYear()}]`}</p>
      </div>
      {user === comment.author ? (
        <button id="delete-comment-btn" onClick={handleDelete}>
          Delete
        </button>
      ) : (
        ""
      )}
    </li>
  );
}
