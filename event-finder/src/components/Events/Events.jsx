import "./Events.scss";

// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { API_URL, api_key } from "../../utils/api";

export default function PhotoCard({ selectedTag, isTagsPanelOpen }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await axios.get("localhost:8080/");
        setPhotos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getPhotos();
  }, []);

  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <section
      className={`photo-gallery ${
        isTagsPanelOpen ? "photo-gallery--with-filter-panel" : ""
      }`}
    >
      {filteredPhotos.map((photo) => (
        // <Link
        //   to={`/photos/${photo.id}`}
        //   key={photo.id}
        //   className="photo-gallery__link"
        // >
        <article
          className={`photo-card ${
            isTagsPanelOpen ? "photo-card--with-filter-panel" : ""
          }`}
        >
          <img
            className="photo-card__photo"
            src={photo.photo}
            alt={photo.photoDescription}
          />
          <h4 className="photo-card__photographer">{photo.photographer}</h4>
          <div className="photo-card__tags">
            {photo.tags.map((tag, index) => (
              <span key={index} className="photo-card__tag">
                {tag}
              </span>
            ))}
          </div>
        </article>
        // </Link>
      ))}
    </section>
  );
}
