import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/images.css'
import f1 from '../assets/the_imgs/fs1.png'
import f2 from '../assets/the_imgs/fs2.png'
import f3 from '../assets/the_imgs/fs3.png'
import f4 from '../assets/the_imgs/fs4.png'
import f5 from '../assets/the_imgs/fs5.png'
import f6 from '../assets/the_imgs/fs6.png'
import f7 from '../assets/the_imgs/fs7.png'
import f8 from '../assets/the_imgs/fs8.png'
import f9 from '../assets/the_imgs/fs9.png'
import f10 from '../assets/the_imgs/fs10.png'
import f11 from '../assets/the_imgs/fs11.png'
import f12 from '../assets/the_imgs/fs12.png'
import f13 from '../assets/the_imgs/fs13.png'
import f14 from '../assets/the_imgs/fs14.png'
import f15 from '../assets/the_imgs/fs15.png'


export const Fstack = () => {
     const images = [
    { id: 1, src: f1, alt: "api root" },
    { id: 2, src: f2, alt: "loading page" },
    { id: 3, src: f3, alt: "login page" },
    { id: 4, src: f4, alt: "signup page" },
    { id: 5, src: f5, alt: "loading circle" },
    { id: 6, src: f6, alt: "profile page" },
    { id: 7, src: f7, alt: "follower/following list" },
    { id: 8, src: f8, alt: "edit profile" },
    { id: 9, src: f9, alt: "home page" },
    { id: 10, src: f10, alt: "create post" },
    { id: 11, src: f11, alt: "search profiles" },
    { id: 12, src: f12, alt: "sugeestion for new users" },
    { id: 13, src: f13, alt: "suggestion page" },
    { id: 14, src: f14, alt: "model list" },
    { id: 15, src: f15, alt: "user list" },
  ];

  const [selected, setSelected] = useState(null);
   const navigate = useNavigate();
  
    const goBack = () => {
      navigate('/Projects');
    };
  return (
       <div className="gallery-container">
      <h2>Social Media Clone</h2>
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
