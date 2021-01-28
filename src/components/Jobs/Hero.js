import React from 'react';

import heroImage from '../../assets/open-positions@2x.png';
import heroImageGif from '../../assets/open-positions.gif';

export default function JobsHero() {
  return (
    <div className='jobs-hero-container'>
      <div>
        <h4 className='label-uppercase'>Open Positions</h4>
        <h1 className='heading-1'>Help us create the future of Software</h1>
        <p className='hero-content'>
          The ability to make software opens up tremendous creative
          possibilities, and we want to empower people to bring these
          possibilities to life--no matter how ambitious. The good news is that
          creating software doesn't have to mean writing code. What will you
          create?
        </p>
      </div>
      <div className='jobs-hero-image-container'>
        <img src={heroImage} alt='Open Positions Image' className='image' />
        <img src={heroImageGif} alt='Open Positions GIF' className='gif' />
      </div>
    </div>
  );
}
