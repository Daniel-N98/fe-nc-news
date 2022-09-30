import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://nc-news-daniel.herokuapp.com/api",
});

export const fetchAllArticles = async (topic, sortBy, orderBy, limit) => {
  try {
    const { data } = await baseURL.get(`/articles`, {
      params: {
        topic,
        sort_by: sortBy,
        order: orderBy,
        limit
      },
    });
    return data.articles;
  } catch (error) {
    throw error;
  }
};

export const fetchArticleById = async (article_id) => {
  try {
    const { data } = await baseURL.get(`/articles/${article_id}`);
    return data.article;
  } catch (error) {
    throw error;
  }
};

export const fetchAllTopics = async () => {
  try {
    const { data } = await baseURL.get("/topics");
    return data.topics;
  } catch (error) {
    return error;
  }
};

export const updateArticleVotes = async (article_id) => {
  try {
    const { data } = await baseURL.patch(`/articles/${article_id}`, {
      inc_votes: 1,
    });
    return data.article;
  } catch (error) {
    return error;
  }
};

export const fetchArticleComments = async (article_id) => {
  try {
    const { data } = await baseURL.get(`/articles/${article_id}/comments`);
    return data.comments;
  } catch (error) {
    return error;
  }
};

export const postArticleComment = async (article_id, comment) => {
  try {
    const result = await baseURL.post(
      `/articles/${article_id}/comments`,
      comment,
      {
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      }
    );
    return result.comment;
  } catch (error) {
    return error;
  }
};

export const deleteArticleComment = async (comment_id) => {
  try {
    await baseURL.delete(`/comments/${comment_id}`);
  } catch (error) {
    throw error;
  }
};
