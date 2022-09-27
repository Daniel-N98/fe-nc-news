import Navigation from "./Navigation";
import "./style/header.css";

export default function Header() {
  return (
    <header>
      <div id="wrapper">
        <h1>
          NC<span>News</span>
        </h1>
        <Navigation />
      </div>
    </header>
  );
}
