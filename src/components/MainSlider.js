import React, { Component } from "react";

class MainSlider extends Component {
  render() {
    return (
      <div className="carousel">
        <figure className="spinner">
          <img src="/images/lake-tekapo.jpg" alt="sliderimage" />
          <img src="/images/still-lake.jpg" alt="sliderimage" />
          <img src="/images/pink-milford-sound.jpg" alt="sliderimage" />
          <img src="/images/paradise.jpg" alt="sliderimage" />
          <img src="/images/morekai.jpg" alt="sliderimage" />
          <img src="/images/milky-blue-lagoon.jpg" alt="sliderimage" />
          <img src="/images/lake-tekapo.jpg" alt="sliderimage" />
          <img src="/images/milford-sound.jpg" alt="sliderimage" />
        </figure>
      </div>
    );
  }
}

export default MainSlider;
