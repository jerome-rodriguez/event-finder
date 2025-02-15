import axios from "axios";
import { useState, useEffect } from "react";
import "../PostEventsPage/PostEventsPage.scss";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function PostEventsPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fomo-api.onrender.com/category"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`https://fomo-api.onrender.com/events`, {
        name,
        date,
        time,
        location,
        category,
        description,
        price,
      });

      // Reset form fields after successful submission
      setName("");
      setDate("");
      setTime("");
      setLocation("");
      setCategory("");
      setDescription("");
      setPrice(0);
    } catch (error) {
      console.error("Error submitting event:", error);
    }
  };

  return (
    <section className="event-form__container">
      <button className="event-form__button">
        <Link to="/">Back to events list</Link>
      </button>
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="event-form__field">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="event-form__field">
          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="event-form__field">
          <label htmlFor="time">Event Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </div>

        <div className="event-form__field">
          <label htmlFor="location">Event Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </div>

        <div className="event-form__field">
          <label htmlFor="category">Event Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat) => (
              <option key={uuidv4()} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="event-form__field">
          <label htmlFor="description">Event Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>

        <div className="event-form__field">
          <label htmlFor="price">Event Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
            min="0"
            required
          />
        </div>

        <button type="submit" className="event-form__submit">
          Submit Event
        </button>
      </form>
    </section>
  );
}

export default PostEventsPage;
