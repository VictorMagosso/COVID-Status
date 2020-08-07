import React, { Component, useState } from 'react';
import PageDefault from '../PageDefault';
import api from '../../components/API/apiCovid';
import {Link} from 'react-router-dom';
import './style.css';

class Global extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Brazil', status: [], ultimoDia: '', dayOne: [], ultimoMes: []};
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({ultimoDia: this.state.value})
        this.setState({dayOne: this.state.value})
        this.setState({ultimoMes: this.state.value})
      }

    async componentDidMount(){
        const retornoCountries = await api.get('/countries');
        let paisSelecionadoApi = await api.get(`/live/country/${this.state.value.toLowerCase()}/status/confirmed/date/2020-03-21T00:00:00Z`)
        let paisDayOneApi = await api.get(`/dayone/country/${this.state.value.toLowerCase()}/status/confirmed`)
        let paisUltimoMes = await api.get(`/country/${this.state.value.toLowerCase()}/status/confirmed?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z`)
        
        this.setState({status: retornoCountries.data})
        this.setState({ultimoDia: paisSelecionadoApi.data[0]});
        this.setState({dayOne: paisDayOneApi.data[160]})
        this.setState({ultimoMes: paisUltimoMes.data[30].Cases - paisUltimoMes.data[0].Cases})
        
    }
    render(){
       const {status, ultimoDia, dayOne, ultimoMes} = this.state
      
        return (

    <PageDefault>
        <div className="container-global">
    <h1 className="mb-5">Global</h1>
    <div className="container-formulario-global">
        <label className="d-block">Escolha o país para verificar os dados atuais sobre o COVID-19</label>
        <select defaultValue='-' className="select-paises" onChange={this.handleChange}>

            {status.map(nomeDoPaisDaAPI => (
                <option key={nomeDoPaisDaAPI.Country} value={nomeDoPaisDaAPI.Country}>{nomeDoPaisDaAPI.Country}</option>
            ))}
    </select>
            <h1 className="mt-3">{this.state.value}</h1>
            {/* <h3>Country Zone: + </h3> */}
            
        <button className='mt-4' id="calcular">Verificar<i className="fas fa-search ml-2"></i></button>
    
    <span>Data de atualização: 06/08/2020</span>
    <div className="display-flex-resultados-global">
    <div className="item-flex-resultados-global">
        <h4>No último dia</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{ultimoDia.Confirmed}</h5>
            <h5><i className="fas fa-search float-left ml-5 text-info"></i>{ultimoDia.Recovered}</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>{ultimoDia.Deaths}</h5>
        </div>

        <div className="item-flex-resultados-global">
        <h4>No último mês</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{ultimoMes}</h5>
            {/* <h5><i className="fas fa-search float-left ml-5 text-info"></i>350.000</h5> */}
            {/* <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5> */}
        </div>

        <div className="item-flex-resultados-global">
        <h4>Até o momento</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{dayOne.Cases}</h5>
            {/* <h5><i className="fas fa-search float-left ml-5 text-info"></i>{dayOne.Cases}</h5> */}
            {/* <h5><i className="fas fa-skull float-left ml-5"></i>{dayOne.Cases}</h5> */}
        </div>
    </div>
</div>
    </div>
    </PageDefault>
        )}};

export default Global;