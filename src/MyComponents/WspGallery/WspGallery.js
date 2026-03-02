// import { useState } from "react";
import "./wsp-gallery.css";

const WspGallery = ({ galleryImages }) => {
  // const[slideNumber,setSlideNumber]=useState(0)
  // const[openModal,setOpenModal]=useState(false)
  return (
    <div>
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div className="single" key={index}>
                <img src={slide.img} alt="" />
              </div>
            );
          })}
        ;
      </div>
    </div>
  );
};
export default WspGallery;
