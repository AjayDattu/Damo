import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LenisSmoothScroll from "./components/LenisSmoothScroll";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <LenisSmoothScroll>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            {/* Old links */}
            <Route path="/MainPage" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </LenisSmoothScroll>
    </BrowserRouter>
  );
}

export default App;
