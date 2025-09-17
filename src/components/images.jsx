import React, { useState } from "react";
import '../css/images.css'
import r1 from '../assets/the_imgs/react1.png'
import r2 from '../assets/the_imgs/react2.png'
import r3 from '../assets/the_imgs/react3.png'
import r4 from '../assets/the_imgs/react4.png'
import r5 from '../assets/the_imgs/react5.png'
import { useNavigate } from "react-router-dom";

export const I = () => {
     const images = [
    { id: 1, src: r1, alt: "home page" },
    { id: 2, src: r2, alt: "food page" },
    { id: 3, src: r3, alt: "movie page" },
    { id: 4, src: r4, alt: "pixabay page" },
    { id: 5, src: r5, alt: "search on pixabay" },
  ];

  const [selected, setSelected] = useState(null);
   const navigate = useNavigate();
  
    const goBack = () => {
      navigate('/Projects');
    };
  return (
       <div className="gallery-container">
      <h2>Frontend Project</h2>
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
