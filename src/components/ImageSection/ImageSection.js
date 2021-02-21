import { Link } from "@material-ui/core";
import React from "react";

export default function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Lorem Ipsum</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          necessitatibus perferendis numquam dolorem cumque facilis. Desir per
          po la ta doso vi slone ve?
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Lorem Ipsum</p>
            <p>: 50</p>
            <p>: French</p>
            <p>: French, Spanish, English</p>
            <p>: 2 Beightbridge, BN7 GB9, United kingdom</p>
            <p>: France, Spain, Germany</p>
          </div>
        </div>
        <Link>
          <button className="btn">Download CV</button>
        </Link>
      </div>
    </div>
  );
}