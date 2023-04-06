import React from 'react';
import Card from './Card'


import img1 from "../assets/BUS.jpg"
import img2 from "../assets/DEV.jpg"
import img3 from "../assets/HTML.jpg"
import img4 from "../assets/JS.jpg"
import img5 from "../assets/DEV.jpg"
import img6 from "../assets/HTML.jpg"



function Maiin() {
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>

        <Card img={img1} text="HTML EVENT"/>
        <Card img={img2} text="JAVA JS EVENT"/>
        <Card img={img3} text="BUSINESS EVENT"/>
        <Card img={img4} text="PHOTOGRAPHY EVENT"/>
        <Card img={img5} text="MUSIC EVENT"/>
        <Card img={img6} text="RAOUF COOK EVENT"/>

        

      </div>
    </div>
  );
}

export default Maiin;
