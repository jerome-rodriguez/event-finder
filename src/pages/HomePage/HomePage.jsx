import "../HomePage/HomePage.scss";
import Events from "../../components/Events/Events";
import { Link } from "react-router-dom";
import "../HomePage/HomePage.scss";

export default function HomePage() {
  return (
    <section className="home-page">
      <button className="homepage__button">
        <Link to="/addevents">Share an event with your friends</Link>
      </button>
      <Events />
    </section>
  );
}
