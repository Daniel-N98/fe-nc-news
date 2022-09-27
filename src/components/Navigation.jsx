import { Link } from "react-router-dom";
import "./style/navigation.css";

export default function Navigation() {
  return (
    <nav>
      <ul id="nav-list">
        <Link to="/home" className="links">
          HOME
        </Link>
        <Link to="/articles" className="links">
          ARTICLES
        </Link>
        <Link to="/topics" className="links">
          TOPICS
        </Link>
        <Link to="/users" className="links">
          USERS
        </Link>
      </ul>
    </nav>
  );
}
