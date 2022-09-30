import { Link } from "react-router-dom";
import "./style/errorScreen.css";

export default function ErrorScreen({type}) {
  return (
    <section id="error-screen" className="text-center article">
      <h1>Whoops!! Nothing is here..</h1>
      <p>It seems you've stumbled across a non-existent {type}...</p>
      <Link to={`/${type}`}>
        <span>Click to return to the {type} page</span>
      </Link>
    </section>
  );
}
