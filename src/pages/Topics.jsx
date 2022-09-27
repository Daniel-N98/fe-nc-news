import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllTopics } from "../components/utilities/requests";
import "../components/style/topics.css";
import { indicateLoading } from "../components/utilities/utilityFunctions";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllTopics().then((topics) => {
      setIsLoading(false);
      setTopics(topics);
    });
  }, []);

  if (isLoading) {
    return indicateLoading();
  }

  return (
    <section id="topics-list" className="text-center">
      <h1>Select a topic</h1>
      <ul id="topics-list" className="flex">
        {topics.map((topic) => {
          return (
            <button key={topic.id + topic.slug}>
              <Link to={`/topic/${topic.slug}/articles`} className="links">
                <h4>{topic.slug}</h4>
              </Link>
            </button>
          );
        })}
      </ul>
    </section>
  );
}
