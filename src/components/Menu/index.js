import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Menu = () => (
    <div>
        <ul className="menu">
<li title="Início"><Link to="/" className="search">search</Link></li>
<li title="Relatório geral"><Link to="/relatorio" className="pencil">pencil</Link></li>
<li title="Pesquisa nacional"><Link to="/nacional" className="active about">about</Link></li>
<li title="Pesquisa global"><Link to="/global" className="archive">archive</Link></li>
<li title="Contato do desenvolvedor"><Link to="/" className="contact">contact</Link></li>
</ul>
    </div>
)


export default Menu;