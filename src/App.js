import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import Blog from './component/Blog';
import Contact from './component/Contact';
import NoPage from './component/NoPage';
import Login from './component/Login';
import Team from './component/Team';
import './styles/App.css';

function App() {
  return (

    <Router>
      <Layout>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>

            </li>
          </ul>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>

            </li>
          </ul>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>

            </li>
          </ul>
          <ul>
            <li>
              <Link to="/Layout">Layout</Link>

            </li>
          </ul>
          <ul>
            <li>
              <Link to="/NoPage">NoPage</Link>

            </li>
          </ul>
          <ul>
            <li>
            <Link to="/Login">Login</Link>
            </li>
          </ul>
          <ul>
            <li>
            <Link to="/Team">Team</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/NoPage" element={<NoPage />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

      </Layout>
    </Router>
  );
}

export default App;
