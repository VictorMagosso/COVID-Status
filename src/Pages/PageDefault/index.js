import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const PageDefault = ({children}) => (
    <div>
    <Menu/>
        {children}
    <Footer/>
    </div>
);

export default PageDefault;