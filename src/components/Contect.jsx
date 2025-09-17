import React from 'react'
import '../css/contect.css'
import { useNavigate } from 'react-router-dom'


export const Contect = () => {
  const navigate = useNavigate();
  
    const goBack = () => {
      navigate('/')
    }
  return (
   <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-info">
          <p><strong>Name:</strong> Babariya Mit</p>
          <p><strong>Email:</strong> 
            <a href="mailto:mit944996@gmail.com"> mit944996@gmail.com</a>
          </p>
          <p><strong>Phone:</strong> 
            <a href="tel:7861035305"> +91 7861035305</a>
          </p>
          <p><strong>LinkedIn:</strong> 
            <a 
              href="https://www.linkedin.com/in/babariya-mit-2a16a1351/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/babariya-mit
            </a>
          </p>
          <p><strong>GitHub:</strong> 
            <a 
              href="https://github.com/BabariyaMit8702" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/BabariyaMit8702
            </a>
          </p>
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
