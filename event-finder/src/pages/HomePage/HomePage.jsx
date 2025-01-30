import { useState } from "react";

import "../HomePage/HomePage.scss";

import FilterPanel from "../../components/FilterPanel/FilterPanel";
// import Main from "../../components/Main/Main";

export default function HomePage({ isTagsPanelOpen }) {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <section className="home-page">
      {isTagsPanelOpen && (
        <FilterPanel
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      )}
      <Events selectedTag={selectedTag} isTagsPanelOpen={isTagsPanelOpen} />
    </section>
  );
}
