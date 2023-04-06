import React from 'react';
import Card from './Card'
import img1 from "../assets/lohp-category-marketing-v2.jpg"
import img2 from "../assets/lohp-category-design-v2.jpg"
import img3 from "../assets/lohp-category-business-v2.jpg"
import img4 from "../assets/lohp-category-development-v2.jpg"
import img5 from "../assets/lohp-category-music-v2.jpg"
import img6 from "../assets/lohp-category-photography-v2.jpg"
import img7 from "../assets/lohp-category-it-and-software-v2.jpg"


function Main() {
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>

        <Card img={img1} text="MARKETING"/>
        <Card img={img2} text="DESIGN"/>
        <Card img={img3} text="BUSINESS"/>
        <Card img={img4} text="DEVELOPMENT"/>
        <Card img={img5} text="MUSIC"/>
        <Card img={img6} text="PHOTOGRAPHY"/>
        <Card img={img7} text="IT"/>

      </div>
    </div>
  );
}

export default Main;
