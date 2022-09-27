import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://nc-news-daniel.herokuapp.com/api",
});

export const fetchAllArticles = async (topic) => {
  const { data } = await baseURL.get("/articles", {
    params: {
      topic,
    },
  });
  return data.articles;
};

export const fetchAllTopics = async () => {
  const { data } = await baseURL.get("/topics");
  return data.topics;
};
