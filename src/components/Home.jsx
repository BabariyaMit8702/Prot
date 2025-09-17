import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
      const sections = [
    "Personal Info",
    "About Me",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  const navigate = useNavigate();

  return (
    <>
    <div className="home">
      <h2 className="home-title">Welcome to My Portfolio</h2>
      <div className="button-grid">
        {sections.map((section, index) => (
          <button key={index} className="portfolio-btn" onClick={() => navigate(`/${section}`)}>
            {section}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}
