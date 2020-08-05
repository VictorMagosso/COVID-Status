import React, { Component, useState } from 'react';
import apiNacional from '../../components/API/apiNacional';
import './style.css';
import PageDefault from '../PageDefault';

class Nacional extends Component {
    state= {
        status: [],
        allStates: []
    }
    async componentDidMount(){
        const all = await apiNacional.get(``)
        const res = await apiNacional.get(`/brazil/uf/sp`);

        this.setState({status: res.data, allStates: all.data})
    }
    
    render(){
       const {allStates} = this.state
       const {status} = this.state

       return (
<PageDefault>
    <div className="container-nacional">
    <h1 className="mb-5">Nacional</h1>
    <div className="container-formulario-nacional">
        <label className="d-block">Escolha o estado para saber os dados sobre COVID</label>
    <select size="10" className="select-cidades">
        {status.map(states => (
        <option key={states.uf} value="ac" className={states.uf}>Acre</option>
        ))}
    </select>
    <button id="calcular">Verificar<i className="fas fa-search ml-2"></i></button>

    <div className="display-flex-resultados">
                <div key={status.uid} className="item-flex-resultados">
                    <h2>{status.state}</h2>
            <small>Último dia</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
            <hr/>
            <small>Último mês</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
            <hr/>
            <small>Até hoje</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{status.cases}</h5>
            <h5><i title="suspeita" className="fas fa-search float-left ml-5 text-info"></i>{status.suspects}</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>{status.deaths}</h5>
        </div>

        <div className="item-flex-resultados">

        <h2>Região</h2>
            <small>Último dia</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
            <hr/>
            <small>Último mês</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
            <hr/>
            <small>Até hoje</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div>
        
        <div className="item-flex-resultados">

        <h2>País</h2>
            <small>Último dia</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
            <hr/>
            <small>Último mês</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
            <hr/>
            <small>Até hoje</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div>

    </div>

    </div>
    </div>
</PageDefault>
       )
    }

}

export default Nacional;