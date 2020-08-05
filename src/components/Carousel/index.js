import React from 'react';
import ImgUm from '../../assets/car1.jpg';
import ImgDois from '../../assets/car2.jpg';
import ImgTres from '../../assets/car3.jpg';
import ImgQuatro from '../../assets/car4.jpg';
import ImgCinco from '../../assets/car5.jpg';
import ImgSeis from '../../assets/car6.jpg';
import './style.css';

const Carousel = () => (
    <div>
    <h3 className="mt-4">Últimas notícias</h3>
 <div id="carousel" className="carousel slide" data-ride="carousel">

  <div className="carousel-inner">
    <div className="carousel-item bg-light">
      <img className="d-inline w-50" src={ImgUm} alt="First slide"/>
      <img className="d-inline w-50" src={ImgDois} alt="Second slide"/>
      <a href="" className="btn w-50 float-left">Veja mais</a>
      <a href="" className="btn w-50 float-right">Veja mais</a>
    </div>

    <div className="carousel-item active">
      <img className="d-inline w-50" src={ImgTres} alt="Second slide"/>
      <img className="d-inline w-50" src={ImgQuatro} alt="Third slide"/>
      <a href="" className="btn w-50">Veja mais</a>
      <a href="" className="btn w-50">Veja mais</a>
    </div>

    <div className="carousel-item">
      <img className="d-inline w-50" src={ImgCinco} alt="Second slide"/>
      <img className="d-inline w-50" src={ImgSeis} alt="Third slide"/>
      <a href="" className="btn w-50">Veja mais</a>
      <a href="" className="btn w-50">Veja mais</a>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
);

export default Carousel;