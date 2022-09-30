import { Link } from "react-router-dom";
import "./style/errorScreen.css";

export default function ErrorScreen({ number }) {
  const types = [
    { type: "", link: "/home" },
    { type: "topic", link: "/topics" },
    { type: "article", link: "/articles" },
  ];
  return (
    <section id="error-screen" className="text-center article">
      <h1>Whoops!! Nothing is here..</h1>
      <p>It seems you've stumbled across a non-existent {types[number].type} page...</p>
      <Link to={types[number].link}>
        <span>Click to return to the {types[number].type ? types[number].type : "home"} page</span>
      </Link>
    </section>
  );
}
