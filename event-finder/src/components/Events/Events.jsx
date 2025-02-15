import "./Events.scss";

// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { API_URL, api_key } from "../../utils/api";

// export default function PhotoCard({ selectedTag, isTagsPanelOpen }) {
//   const [photos, setPhotos] = useState([]);

export default function PhotoCard() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await axios.get("https://fomo-api.onrender.com/");
        setPhotos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getPhotos();
  }, []);

  //   const filteredPhotos = selectedTag
  //     ? photos.filter((photo) => photo.tags.includes(selectedTag))
  //     : photos;

  return (
    <section className="events-gallery">
      {photos.map((photo) => (
        // <Link
        //   to={`/photos/${photo.id}`}
        //   key={photo.id}
        //   className="photo-gallery__link"
        // >
        <article className={"event-card"} key={photo.id}>
          <img
            className="event__photo"
            src={photo.photo}
            alt={photo.description}
          />
          <h4 className="event__name">{photo.name}</h4>
          <p className="event__description">{photo.description}</p>
          <p className="event__category">{photo.category}</p>
          <p className="event__date">{photo.date}</p>
          <p className="event__time">{photo.time}</p>
          <p className="event__location">{photo.location}</p>
          <p className="event__price">{photo.price}</p>
        </article>
        // </Link>
      ))}
    </section>
  );
}
