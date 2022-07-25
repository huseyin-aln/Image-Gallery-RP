import images from "./assets/images";
import { useState } from "react";

const ImageGallery = () => {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div className="container">
      <div className="selected-container">
        <img src={selectedImg} alt="selected" className="selected" />
      </div>
      <div className="img-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="landscape"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
