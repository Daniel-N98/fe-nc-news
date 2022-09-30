import { Link } from "react-router-dom";
import "./style/errorScreen.css";

export default function ErrorScreen({type}) {
  return (
    <section id="error-screen" className="text-center article">
      <h1>Whoops!! Nothing is here..</h1>
      <p>It seems you've stumbled across a non-existent {type}...</p>
      <Link to={`/home`}>
        <span>Click to return to the home page</span>
      </Link>
    </section>
  );
}
