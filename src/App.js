import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleView from "./components/ArticleView";
import UserContext from "./contexts/userContext";
import Header from "./components/Header";
import TopicArticles from "./components/TopicArticles";
import Articles from "./pages/Articles";
import Topics from "./pages/Topics";

function App() {
  return (
    <UserContext.Provider value='jessjelly'>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topic/:topic/articles" element={<TopicArticles />} />
          <Route path="/articles/:article_id" element={<ArticleView />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
