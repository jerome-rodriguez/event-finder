// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

// may have to change routing

// import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PostEventsPage from "./pages/PostEventsPage/PostEventsPage";

function App() {
  // const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);

  // const toggleTagsPanel = () => {
  //   setIsTagsPanelOpen((prev) => !prev);
  // };

  return (
    <>
      <BrowserRouter>
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addevents" element={<PostEventsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
