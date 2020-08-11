import React from 'react';
import './style.css';
import Carousel from '../../components/Carousel';
import PageDefault from '../PageDefault';

const Home = () => (
    <PageDefault>
    <div className='container-geral-home'>
    <div className="main-container">
        <h1 className="align-title">Bem-vindo ao nosso espaço da saúde<i className="fas fa-shield-virus ml-4 display-4 text-success"></i></h1>
        <h4>Aqui você poderá acompanhar os casos de COVID-19 ao redor do Mundo e ajudar a combater o coronavírus</h4>
        <h2><i className="fas fa-arrow-left seta d-none d-sm-inline"></i>Fique à vontade para navegar entre os itens no menu lateral e realizar sua busca!</h2>
        <Carousel/>
    </div>
    </div>
    </PageDefault>
)

export default Home;