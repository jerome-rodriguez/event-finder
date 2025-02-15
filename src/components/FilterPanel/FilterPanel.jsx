import "./FilterPanel.scss";
import Tags from "../Tags/Tags";

export default function FilterPanel({ selectedTag, setSelectedTag }) {
  return (
    <section className="filter-panel">
      <h2 className="filter-panel__label">Categories</h2>
      <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
    </section>
  );
}
