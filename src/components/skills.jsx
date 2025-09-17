import React from 'react'
import '../css/skills.css'
import { useNavigate } from 'react-router-dom'


export const Skills = () => {

   const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  }
  return (
  <>
        <section className="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        {/* Tech Skills */}
        <div className="skills-category">
          <h3 className="category-title">Tech Skills</h3>

          <div className="skills-grid">
            <div className="skill-card">
              <h4>Frontend</h4>
              <p>HTML, CSS, JavaScript, Tailwind CSS, React, Redux, React Hooks</p>
            </div>

            <div className="skill-card">
              <h4>Backend</h4>
              <p>Python, Django, Django REST Framework</p>
            </div>

            <div className="skill-card">
              <h4>Database</h4>
              <p>MySQL, PostgreSQL</p>
            </div>

            <div className="skill-card">
              <h4>Concepts</h4>
              <p>
                OOP, REST APIs, Frontend + Backend Integration, JWT Auth, Custom Auth with Secure Cookies
              </p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-category">
          <h3 className="category-title">Tools</h3>
          <p>Git & GitHub, GitHub Copilot, Postman (API Testing)</p>
        </div>

        {/* Soft Skills */}
        <div className="skills-category">
          <h3 className="category-title">Soft Skills</h3>
          <p>Problem Solving, Communication, Teamwork</p>
        </div>

        {/* Languages */}
        <div className="skills-category">
          <h3 className="category-title">Languages</h3>
          <p>Hindi, English, Gujarati</p>
        </div>
      </div>
      <center>
             <button onClick={goBack} className="btn back-btn">
              ← Go Back
            </button>
            </center>
    </section>

  </>
  )
}
