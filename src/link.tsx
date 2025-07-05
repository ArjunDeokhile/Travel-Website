import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Stories from './Stories'; // ✅ Capitalized & correct file import

function MainRouter() {
  return (
    <Router>
      {/* Example: Navigation Link */}
      <div>
        <Link to="/stories">Watch Stories</Link>
      </div>

      {/* Routing Setup */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/stories" element={<Stories />} /> {/* ✅ Fix tag and component name */}
      </Routes>
    </Router>
  );
}

export default MainRouter;
