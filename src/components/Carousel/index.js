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
      <a target="_blank" href="https://brasil.elpais.com/internacional/2020-08-03/oms-alerta-que-talvez-nunca-se-descubra-um-remedio-contra-a-covid-19.html#:~:text=A%20taxa%20de%20letalidade%20da,%C3%BAltimos%20estudos%20citados%20pela%20entidade&text=A%20bala%20de%20prata%2C%20segundo,capaz%20de%20matar%20o%20lobisomem." className="btn w-50 float-left">Veja mais</a>
      <a target="_blank" href="https://www.uol.com.br/vivabem/noticias/redacao/2020/01/25/tire-suas-principais-duvidas-sobre-o-coronavirus-que-se-espalha-pelo-mundo.htm" className="btn w-50 float-right">Veja mais</a>
    </div>

    <div className="carousel-item active">
      <img className="d-inline w-50" src={ImgCinco} alt="Second slide"/>
      <img className="d-inline w-50" src={ImgSeis} alt="Third slide"/>
      <a target="_blank" href="https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2020/08/03/mpf-recorre-para-que-uniao-go-e-goiania-oferecam-medicamentos-para-covid.htm" className="btn w-50">Veja mais</a>
      <a target="_blank" href="https://g1.globo.com/sc/santa-catarina/noticia/2020/08/03/estudo-aponta-que-florianopolis-flexibilizou-medidas-contra-covid-19-quando-o-virus-avancava.ghtml" className="btn w-50">Veja mais</a>
    </div>

    <div className="carousel-item">
      <img className="d-inline w-50" src={ImgTres} alt="Second slide"/>
      <img className="d-inline w-50" src={ImgQuatro} alt="Third slide"/>
      <a target="_blank" href="https://www.em.com.br/app/noticia/internacional/2020/08/03/interna_internacional,1172730/pesquisadores-de-harvard-pedem-mais-testes-rapidos-e-baratos-de-covid.shtml" className="btn w-50">Veja mais</a>
      <a target="_blank" href="https://www.saopaulo.sp.gov.br/noticias-coronavirus/avanco-da-covid-19-na-capital-paulista-e-monitorado-em-tempo-real/" className="btn w-50">Veja mais</a>
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