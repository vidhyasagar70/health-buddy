import React from "react";
import "./lifestyle.css";

const packages = [
  { title: "Hyper-Tension", icon: "hyper-tension-icon" },
  { title: "Obesity", icon: "obesity-icon" },
  { title: "Smoking", icon: "smoking-icon" },
  { title: "Diabetic", icon: "diabetic-icon" },
  { title: "Obesity", icon: "obesity-icon" },
  { title: "Hyper-Tension", icon: "hyper-tension-icon" },
];

function Lifestyle() {
  return (
    <div className="App">
      <h1 className="title">Lifestyle Health Check-up Packages</h1>
      <div className="packages">
        {packages.map((pkg, index) => (
          <div key={index} className="package">
            <div className={pkg.icon}></div>
            <p>{pkg.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lifestyle;
