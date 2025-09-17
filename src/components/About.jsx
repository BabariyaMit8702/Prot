import React from 'react'
import '../css/about.css'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  }
  return (

    <>
       <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I'm <span className="highlight">Babariya Mit</span>. I am currently 
          pursuing <strong>B.Sc. IT</strong> in my 2nd year at{" "}
          <span className="highlight">Gurukul College, Junagadh</span>.
        </p>
        <p className="about-text">
          I have strong knowledge of <span className="highlight">Django</span> and{" "}
          <span className="highlight">React</span>, and my main interest lies in{" "}
          <strong>web development</strong>. I enjoy learning new technologies and
          creating projects that solve real-world problems.
        </p>
      </div>


        {/* Go Back Button */}
           <center>
             <button onClick={goBack} className="btn back-btn">
              ← Go Back
            </button>
           </center>
    </section>
    </>
  )
}
