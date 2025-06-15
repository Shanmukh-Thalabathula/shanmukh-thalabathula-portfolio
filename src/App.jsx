import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from './pages/Projects.jsx';
import Achievements_Certificates from './pages/Achievements_Certificates.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="achievements-certificates" element={<Achievements_Certificates />}></Route>
          <Route path="about" element={<About/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
