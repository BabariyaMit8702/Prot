import React from 'react'
import resumePdf from '../assets/there.pdf'
import '../css/personal_info.css'
import { useNavigate } from 'react-router-dom'

export const Personal_info = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };
  return (
    <>
        <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Babariya Mit</h1>
          <p className="hero-role">Full Stack Developer</p>
          <p className="hero-intro">
            I am a passionate Full Stack Developer who builds scalable and secure web applications using Django and React. 
            Web development is not just my career path but also my true area of interest.
             <p>
          I'm currently working at ReignAgent as a Full Stack Developer Intern.
        </p>
          </p>
            

          <div className="hero-buttons">
          
            {/* Download + View Resume */}
            <a
              href={resumePdf}
              download="Babariya_Mit_Resume.pdf"
              className="btn"
            >
              Download Resume
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
            >
              View Resume
            </a>

         
          </div>
           {/* Go Back Button */}
            <button onClick={goBack} className="btn back-btn">
              ← Go Back To Home
            </button>
        </div>
            
      </section>
    </>
  )
}
