import React from 'react';
import './style.css'

const Footer = () => (
<div className="container-footer">
    <div className='body-footer'>
    <h5 className='p-4'>Site e design criados por Victor Magosso</h5><hr className='bg-light'/>
    <a target='_blank' href='https://www.linkedin.com/in/victor-magosso-1036921a4/'><i className='fab fa-linkedin display-4'></i></a>
    <a target='_blank' href='https://github.com/VictorMagosso'><i className='fab fa-github display-4'></i></a>
    <a target='_blank' href='https://www.facebook.com/profile.php?id=100008290277079'><i className='fab fa-facebook display-4'></i></a>
    <h5 className='mt-5 mb-3'>Tecnologia usada <i className='fas fa-arrow-right ml-2 mr-2'></i> React <i className='fab fa-react spinning'></i></h5>
    <h6>Contato do desenvolvedor: <i className='fas fa-phone ml-2 mr-3'></i><i className='far fa-envelope'></i></h6>
    <i className='fab fa-whatsapp d-inline mr-2'></i><h6 className='d-inline'>(11) 94883-1123 | victor_magosso@hotmail.com</h6>
    
    </div>
</div>
);

export default Footer;
