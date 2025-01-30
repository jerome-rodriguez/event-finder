import "./Events.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Events.scss";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsRes = await axios.get("http://localhost:8080/events");
        setEvents(eventsRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  if (!events) {
    return <div>Loading...</div>;
  }

  return (
    <section className="events">
      <div className="events__grid-container">
        {events.map((event) => (
          <article key={event.id} className="event-card">
            <img
              src={event.photo}
              alt={event.name}
              className="event-card__image"
            />
            <div className="event-card__content">
              <h2 className="event-card__title">{event.name}</h2>
              <p className="event-card__date-time">
                {event.date} at {event.time}
              </p>
              <p className="event-card__location">{event.location}</p>
              <p className="event-card__category">{event.category}</p>
              <p className="event-card__description">{event.description}</p>
              <p className="event-card__price">Price: ${event.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
