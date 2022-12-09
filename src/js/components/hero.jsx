import React from 'react';
import SpacePhoto from '../../assets/space-photo.jpg';

const Hero = () => {
  console.log('webpack');
  return (
    <section className="hero">
      <div className="hero__img-wrapper">
        <img
          src={SpacePhoto}
          className="hero__img"
          alt="Hero"
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">Webpack</h1>
        <button
          className="hero__btn"
          type="button"
        >Some button</button>
      </div>
    </section>
  );
};

export default Hero;
