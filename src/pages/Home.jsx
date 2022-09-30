import { Link } from "react-router-dom";
import ArticlesList from "../components/ArticleList";

export default function Home() {
  return <section className="text-center">
    <h1>Home page</h1>
    <h3>Featured articles</h3>
    <ArticlesList limit={5} />
    <Link to='/articles'><span>Click to view more</span></Link>
    </section>
}