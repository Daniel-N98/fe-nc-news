import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://nc-news-daniel.herokuapp.com/api",
});

export const fetchAllArticles = async (topic) => {
  try {
    const { data } = await baseURL.get("/articles", {
      params: {
        topic,
      },
    });
    return data.articles;
  } catch (error) {
    return error;
  }
};

export const fetchArticleById = async (article_id) => {
  try {
    const { data } = await baseURL.get(`/articles/${article_id}`);
    return data.article;
  } catch (error) {
    return error;
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
