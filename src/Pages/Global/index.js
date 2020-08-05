import React, { Component, useState } from 'react';
import PageDefault from '../PageDefault';
import {Link} from 'react-router-dom';
import './style.css';
import SelectPaises from '../../components/Selects/SelectPaises';

function Global () {

    return (

    <PageDefault>
        <div className="container-global">
    <h1 className="mb-5">Global</h1>
    <div className="container-formulario-global">
        <label className="d-block">Escolha o país para verificar os dados atuais sobre o COVID-19</label>
        <SelectPaises/>
        
            
            <button id="calcular">Verificar<i className="fas fa-search ml-2"></i></button>
    
    <h1 className="mt-3"> - Country Zone: +55</h1>
    <span>Data de atualização: 04/08/2020</span>
    <div className="display-flex-resultados-global">
    <div className="item-flex-resultados-global">
        <h4>No último dia</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div>

        <div className="item-flex-resultados-global">
        <h4>No último mês</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div>

        <div className="item-flex-resultados-global">
        <h4>Até o momento</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div>

        <div className="item-flex-resultados-global">
        <h4>País com mais casos</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div>

        <div className="item-flex-resultados-global">
        <h4>Continente com mais casos</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div>

        <div className="item-flex-resultados-global">
        <h4>Resumo global</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div>

    </div>
</div>
    </div>
    </PageDefault>
        )};

export default Global;