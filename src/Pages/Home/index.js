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
        <div className='prevencoes-covid'>
            <hr/>
        <h2>- Algumas dicas importantes:</h2>
            <h3><i className="fas fa-hands-wash mr-3 text-success"></i>Lave suas mãos com água e sabão ou utilize álcool em gel</h3>
            <h3><i className="fas fa-users-slash mr-3 text-success"></i>Evite aglomerações! Respeite o distanciamento social</h3>
            <h3><i className="fas fa-head-side-cough mr-3 text-success"></i>Caso tenha algum sintoma, vá ao hospital</h3>
        </div>
        <div className='sintomas-covid'>
        <h2>- Mas quais são os sintomas do coronavírus<i className="fas fa-question-circle ml-3"></i></h2>
        <ol>
            <li>Febre, tosse seca e cansaço são mais comuns</li>
            <li>Dores e desconfortos, dor de garganta, perda do paladar, diarreia e até mesmo conjuntivite podem indicar COVID.</li>
            <li>Alguns sintomas são mais agudos, como a falta de ar, dor ou pressão na região torácica ou até mesmo a perda da fala ou de alguns moviemntos.</li>
        </ol>
        </div>
        <Carousel/>
    </div>
    </div>
    </PageDefault>
)

export default Home;