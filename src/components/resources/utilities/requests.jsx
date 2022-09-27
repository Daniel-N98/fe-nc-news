import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://nc-news-daniel.herokuapp.com/api",
});

export const fetchAllArticles = async () => {
  const { data } = await baseURL.get("/articles");
  return data.articles;
};
