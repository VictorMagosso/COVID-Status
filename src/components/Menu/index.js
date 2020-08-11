import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Menu = () => (
    <div>
        <ul className="menu">
<li title="Status global"><Link to="/" className="archive">global</Link></li>
<li title="Status nacional"><Link to="/nacional" className="active about">nacional</Link></li>
<li title="Início"><Link to="/home" className="search">home</Link></li>
<li title="Contato do desenvolvedor"><a target='_blank' href="https://www.linkedin.com/in/victor-magosso-1036921a4/" className="contact">contato</a ></li>
</ul>
    </div>
)


export default Menu;