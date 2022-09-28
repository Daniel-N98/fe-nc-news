import { useEffect, useState } from "react";
import Comment from "./Comment";
import { fetchArticleComments } from "./utilities/requests";
import { indicateLoading } from "./utilities/utilityFunctions";

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleComments(article_id).then((commentsObj) => {
      setIsLoading(false);
      setComments(commentsObj);
    });
  }, [article_id]);

  if (isLoading) {
    return indicateLoading();
  }

  return (
    <section id="comments-section" className="text-center">
      <h1>Comments</h1>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })
      ) : (
        <h2>This article has no comments.. be the first?</h2>
      )}
    </section>
  );
}
