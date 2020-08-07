import React, { Component, useState } from 'react';
import apiNacional from '../../components/API/apiNacional';
import './style.css';
import PageDefault from '../PageDefault';
import api from '../../components/API/apiCovid';

class Nacional extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        status: '',
        dayOne: [],
        ultimoDia: [],
        ultimoMes: [],
    }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({status: event.target.status});
        // this.setState({ultimoDia: this.state.value})
        // this.setState({dayOne: this.state.value})
        // this.setState({ultimoMes: this.state.value})
    }
    async componentDidMount(){
        let ateHoje = await apiNacional.get(`/brazil/uf/sp`);
        let paisSelecionadoApi = await api.get(`/live/country/brazil/status/confirmed/date/2020-03-21T00:00:00Z`)
        let paisDayOneApi = await api.get(`/dayone/country/brazil/status/confirmed`)
        let paisUltimoMes = await api.get(`/country/brazil/status/confirmed?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z`)

        this.setState({status: ateHoje.data})
        // this.setState({status: ultimoMes.data})
        // this.setState({status: ultimoDia.data})

        this.setState({ultimoDia: paisSelecionadoApi.data[0]});
        this.setState({dayOne: paisDayOneApi.data[160]})
        this.setState({ultimoMes: paisUltimoMes.data[30].cases - paisUltimoMes.data[0].cases})
    }
    render(){
       const {status, dayOne, ultimoDia, ultimoMes} = this.state
       const estados = [{uf:'Acre'},{uf: 'Alagoas'},{uf: 'Amapá'},{uf: 'Amazonas'},{uf: 'Bahia'},{uf: 'Ceará'},{uf: 'Distrito Federal'},{uf: 'Espírito Santo'},{uf: 'Goiás'},{uf: 'Maranhão'},{uf: 'Mato Grosso'},{uf: 'Mato Grosso do Sul'},{uf: 'Minas Gerais'},{uf: 'Pará'},{uf: 'Paraíba'},{uf: 'Paraná'},{uf: 'Pernambuco'},{uf: 'Piauí'},{uf: 'Rio de Janeiro'},{uf: 'Rio Grande do Norte'},{uf: 'Rio Grande do Sul'},{uf: 'Rondônia'},{uf: 'Roraima'},{uf: 'Santa Catarina'},{uf: 'São Paulo'},{uf: 'Sergipe'},{uf: 'Tocantins'}]
       
       return (
    <PageDefault>
        <div className="container-nacional">
            <h1 className="mb-5">Nacional</h1>
        <div className="container-formulario-nacional">
            <label className="d-block">Escolha o estado para saber os dados sobre COVID</label>
        
        <select size='10' className='select-estados'>
        {estados.map((retorno, indice) => (
        <option value={retorno.uf} key={retorno.uf}>{retorno.uf}</option>))}
        
        </select>

    <button id="calcular">Verificar<i className="fas fa-search ml-2"></i></button>

    <div className="display-flex-resultados">
                <div className="item-flex-resultados">
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

        <h2>Por região</h2>
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

        <h2>Brasil</h2>
        
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
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>{dayOne.Cases}</h5>
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