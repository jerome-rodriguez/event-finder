import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import PostEventsPage from "./pages/PostEventsPage/PostEventsPage";

function App() {
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
