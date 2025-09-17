import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/images.css'
import dj1 from '../assets/the_imgs/dj1.png'
import dj2 from '../assets/the_imgs/dj2.png'
import dj3 from '../assets/the_imgs/dj3.png'
import dj4 from '../assets/the_imgs/dj4.png'
import dj5 from '../assets/the_imgs/dj5.png'
import dj6 from '../assets/the_imgs/dj6.png'
import dj7 from '../assets/the_imgs/dj7.png'
import dj8 from '../assets/the_imgs/dj8.png'
import dj9 from '../assets/the_imgs/dj9.png'
import dj10 from '../assets/the_imgs/dj10.png'
import dj11 from '../assets/the_imgs/dj11.png'
import dj12 from '../assets/the_imgs/dj12.png'
import dj13 from '../assets/the_imgs/dj13.png'
import dj14 from '../assets/the_imgs/dj14.png'

export const Idj = () => {
     const navigate = useNavigate();
    
      const goBack = () => {
        navigate('/Projects');
      };
     const images = [
    { id: 1, src: dj1, alt: "home page" },
    { id: 2, src: dj2, alt: "product view page" },
    { id: 3, src: dj3, alt: "serach result" },
    { id: 4, src: dj4, alt: "contect page" },
    { id: 5, src: dj5, alt: "order history" },
    { id: 6, src: dj6, alt: "profile page" },
    { id: 7, src: dj7, alt: "edit profile" },
    { id: 8, src: dj8, alt: "order page" },
    { id: 9, src: dj9, alt: "log in page" },
    { id: 10, src: dj10, alt: "sign up page" },
    { id: 11, src: dj11, alt: "upi payment" },
    { id: 12, src: dj12, alt: "after order" },
    { id: 13, src: dj13, alt: "about page" },
    { id: 14, src: dj14, alt: "after contect" },
  ];

  

  const [selected, setSelected] = useState(null);
  return (
       <div className="gallery-container">
      <h2>Ecommerce WebApp</h2>
      <div className="gallery-grid">
        {images.map((img) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => setSelected(img)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <span className="close">&times;</span>
          <img src={selected.src} alt={selected.alt} className="modal-content" />
          <p className="caption">{selected.alt}</p>
        </div>
      )}
      <center>
       <button onClick={goBack} className="btn back-btn">
              ← Go Back 
            </button>
            </center>
    </div>
  )
}
