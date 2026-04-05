import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/MainPage";
import QuoteAnimation from "./Pages/WordPullup";
import About from "./Pages/About";
import ProjectDescription from "./Pages/ProjectDescription";
import MouseFollower from "./components/Customcursor";

function App() {
  return (
    <Router>
      <MouseFollower />
      <Routes>
        <Route path="/" element={<QuoteAnimation />} />
        <Route path="/MainPage" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/project/:id" element={<ProjectDescription />} />
      </Routes>
    </Router>
  );
}

export default App;
