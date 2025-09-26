import React from 'react'
import '../css/education.css'
import { useNavigate } from 'react-router-dom'


export const Education = () => {
     const navigate = useNavigate();
  
    const goBack = () => {
      navigate('/')
    }
  return (
    <section className="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>

        <div className="education-card">
          <h3 className="edu-degree">B.Sc. IT (Information Technology)</h3>
          <p className="edu-college">
            Shree Shastri Swami Dharma Jivandas IT College, Junagadh (GURUKUL)
          </p>
          <p className="edu-university">
            Bhakta Kavi Narsinh Mehta University, Junagadh
          </p>
          <p className="edu-status">Currently in 2nd Year</p>
          <p className="edu-exp">💼 Intern (september 2025 - present)</p>
        </div>
      </div>
        <center>
             <button onClick={goBack} className="btn back-btn">
              ← Go Back
            </button>
            </center>
    </section>
  )
}
