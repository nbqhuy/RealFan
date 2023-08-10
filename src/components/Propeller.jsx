import React, { useState } from "react";

export default function Propeller() {
  const [imgSrc, setImgSrc] = useState("/propeller.png");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please choose a valid PNG image.");
    }
  };

  return (
    <div className="propeller--container">
      <img id="propeller" src={imgSrc} alt="Propeller" />
      <input type="file" id="myfile" accept="image/*" onChange={handleFileChange} />

    </div>
  );
}
