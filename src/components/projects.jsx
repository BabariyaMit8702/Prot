import React from 'react'
import '../css/project.css'
import { Link, Links, useNavigate } from 'react-router-dom'

export const Pro = () => {
 const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };
   const projects = [
    {
      title: "Social Media Web App",
      stack: "React, Redux, Django, DRF, Tailwind CSS",
      description: `
        A full-featured social media app built with a secure custom JWT 
        authentication system (HttpOnly cookies). Includes user 
        authentication, profile management, image upload posts, likes, 
        comments, followers/following system, and personalized feed. 
        Secure tokens ensure high-level security. Includes search, 
        profile suggestions, and interactive UI.
      `,
    },
    {
      title: "E-commerce Web App",
      stack: "Django, DRF, Django Templates (for UI)",
      description: `
        A complete e-commerce platform with JWT authentication, 
        product categories, search, product details with reviews, 
        add-to-cart functionality, and order management. 
        Supports payment methods like COD and UPI (QR code). 
        Users can view order history, post reviews, and 
        interact with dynamic product filtering.
      `,
    },
    {
      title: "Frontend Web App",
      stack: "React, React Hooks, External APIs",
      description: `
        A frontend-only web app with API integration. Features include 
        exploring world foods (search & filter) and Pixabay images 
        with category filters. Includes simple login simulation. 
        Showcases external API usage and responsive UI.
      `,
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <br /><br /><br /><br />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <>
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <br />
              
            {project.title === "Frontend Web App" ? <>
            <Link to={'https://github.com/BabariyaMit8702/react_practical/tree/react'}>
              github link
             </Link><br /></>:
             project.title === "E-commerce Web App" ? <>
             <Link to={'https://github.com/BabariyaMit8702/yadav-mall'}>
              github link
             </Link>
             <br /></>:
            <> <Link to={'https://github.com/BabariyaMit8702/ic_frontend'}>
              github link (frontend)
             </Link>
             <br />
             <Link to={'https://github.com/BabariyaMit8702/ic_backend'}>
              github link (backend)
             </Link></>
             }
              <br />
              
              <br /><br />
              
              
              <p className="project-stack"><strong>Tech Stack:</strong> {project.stack}</p>
              <p className="project-desc">{project.description}</p>
               {project.title === "Frontend Web App" ?
                <Link className=' demois' to={'/images_react'}>
                Demo
              </Link>:
                project.title === "E-commerce Web App" ? 
                  <Link className=' demois' to={'/images_dj'}>
                Demo
              </Link>:
                <Link className=' demois' to={'/images_fs'}>
                Demo
              </Link>
              }
            </div>
             
            </>
          ))}
        </div>
      </div>
         {/* Go Back Button */}
           <center>
             <button onClick={goBack} className="btn back-btn">
              ← Go Back To Home
            </button>
           </center>
    </section>
  )
}
