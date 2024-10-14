import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import ProjectDetails from './components/features/Projects/ProjectDatails';
import Education from './pages/Education';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/porfolio_react_typescript" element={<Home />} />
            <Route path="/projects/:key" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
