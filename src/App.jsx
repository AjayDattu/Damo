import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/MainPage";
import QuoteAnimation from "./Pages/WordPullup";
import About from "./Pages/About";
import MouseFollower from "./components/Customcursor";

function App() {
  return (
    <Router className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <MouseFollower />
      <Routes>
        <Route path="/" element={<QuoteAnimation />} />
        <Route path="/MainPage" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
