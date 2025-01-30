import "./Tags.scss";

import React, { useState, useEffect } from "react";

import axios from "axios";
// import { API_URL, api_key } from "../../utils/api";

export default function Tags({ selectedTag, setSelectedTag }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      try {
        const response = await axios.get("localhost:8080/category");

        setTags(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getTags();
  }, []);

  return (
    <div className="tags-panel">
      <div className="tags-panel__container">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`tags-panel__tag ${
              selectedTag == tag ? "tags-panel__tag--selected" : ""
            }`}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
