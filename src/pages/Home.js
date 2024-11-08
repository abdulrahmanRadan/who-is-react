import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // استيراد ملف Home.css

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Home Page</h1>
      <div className="home-links">
        <Link to="/language-selection" className="home-link">
          Go to Language Selection
        </Link>
        <Link to="/errors" className="home-link error-link">
          Go to Error Pages
        </Link>
      </div>
    </div>
  );
};

export default Home;
