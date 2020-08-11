import React, { Component, useState } from 'react';
import PageDefault from '../PageDefault';
import api from '../../components/API/apiCovid';
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';
import './style.css';

class Global extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Brazil', code: 'BR', status: [], ultimoDia: [], dayOneConfirmed: [], dayOneActive: [], dayOneRecovered: [], dayOneDeaths: [],ultimoMesConfirmed: [], ultimoMesActive: [], ultimoMesRecovered: [], ultimoMesDeaths: [], globalSummary: []};
        this.handleChange = this.handleChange.bind(this);
      }
    async componentDidMount(){
        const retornoCountries = await api.get('/countries');
        let paisSelecionadoApi = await api.get(`/live/country/${this.state.value.toLowerCase()}/status/confirmed/date/2020-03-21T00:00:00Z`)
        let paisDayOneApiConfirmed = await api.get(`/dayone/country/${this.state.value.toLowerCase()}/status/confirmed`)
        let paisDayOneApiActive = await api.get(`/country/${this.state.value.toLowerCase()}`)
        let paisDayOneApiRecovered = await api.get(`/dayone/country/${this.state.value.toLowerCase()}/status/recovered`)
        let paisDayOneApiDeaths = await api.get(`/dayone/country/${this.state.value.toLowerCase()}/status/deaths`)
        let paisUltimoMesConfirmed = await api.get(`/country/${this.state.value.toLowerCase()}/status/confirmed?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z`)
        let paisUltimoMesRecovered = await api.get(`/country/${this.state.value.toLowerCase()}/status/recovered?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z`)
        let paisUltimoMesDeaths = await api.get(`/country/${this.state.value.toLowerCase()}/status/deaths?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z`)

        let globalSummaryApi = await api.get('/summary')
        
        if (this.state.value.length > 0) {
            this.state.value.replace(' ', '-')
            this.state.value.replace(',', '-')
            this.state.value.replace('(', '')
            this.state.value.replace(')', '')
            this.state.value.replace('united-states-of-america', 'usa')
        }

        //listagem dos paises no <select>
        this.setState({status: retornoCountries.data})
        //base para recuperação dos dados no ultimo dia
        this.setState({ultimoDia: paisSelecionadoApi.data[0]});
        //ate o momento
        this.setState({dayOneConfirmed: paisDayOneApiConfirmed.data[paisDayOneApiConfirmed.data.length - 1]})
        this.setState({dayOneActive: paisDayOneApiActive.data[paisDayOneApiActive.data.length - 1]})
        this.setState({dayOneRecovered: paisDayOneApiRecovered.data[paisDayOneApiRecovered.data.length - 1]})
        this.setState({dayOneDeaths: paisDayOneApiDeaths.data[paisDayOneApiDeaths.data.length - 1]})
        //ultimo mes status
        this.setState({ultimoMesConfirmed: paisUltimoMesConfirmed.data[30].Cases - paisUltimoMesConfirmed.data[0].Cases})
        this.setState({ultimoMesRecovered: paisUltimoMesRecovered.data[30].Cases - paisUltimoMesRecovered.data[0].Cases})
        this.setState({ultimoMesDeaths: paisUltimoMesDeaths.data[30].Cases - paisUltimoMesDeaths.data[0].Cases})
        //resumo global
        this.setState({globalSummary: globalSummaryApi.data.Global})
    }

    handleChange(event) {
        this.setState(event);
      }
    render(){
       const {status, ultimoDia, dayOneConfirmed, dayOneActive, dayOneRecovered, dayOneDeaths, ultimoMesConfirmed, ultimoMesRecovered, ultimoMesDeaths, globalSummary} = this.state
        return (

    <PageDefault>
        <Loader className='loader'
         type="Grid"
         color="#fff"
         height={100}
         width={100}
         timeout={2300}
 
      />
        <div className="container-global">
    <h1 className="mb-5">Global</h1>
    <div className="container-formulario-global">
        <label className="d-block">Escolha o país para verificar os dados atuais sobre o COVID-19</label>
        <select defaultValue='-' className="select-paises" onChange={(e) => this.handleChange({value: e.target.value})}>

            {status.map(nomeDoPaisDaAPI => (
                <option key={nomeDoPaisDaAPI.Country} value={nomeDoPaisDaAPI.Country}>{nomeDoPaisDaAPI.Country}</option>
            ))}
    </select>
            <h1 className="mt-3">{this.state.value}</h1>
            <h3>Country Code: {this.state.ultimoDia.CountryCode}</h3>
            
        <button onClick={(e) => this.componentDidMount(e)} className='mt-4' id="calcular">Atualizar<i className="fas fa-recycle ml-2"></i></button>
    
    <span>Última atualização: 10/08/2020</span>
    <div className='flex-legenda'>
            <div className='legenda-items'>
                <span><i className="fas fa-check text-success"></i> - Casos confirmados</span>
            </div>
            <div className='legenda-items'>
                <span><i className="fas fa-radiation text-warning"></i> - Casos ativos</span>
            </div>
            <div className='legenda-items'>
                <span><i className="fas fa-heart text-danger"></i> - Casos recuperados</span>
            </div>
            <div className='legenda-items'>
                <span><i className="fas fa-skull"></i> - Mortes</span>
            </div>
    </div>
    <div className="display-flex-resultados-global">
    <div className="item-flex-resultados-global">
        <h4>No último dia</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{ultimoDia.Confirmed}</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>{ultimoDia.Recovered}</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>{ultimoDia.Deaths}</h5>
        </div>

        <div className="item-flex-resultados-global">
        <h4>No último mês</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{ultimoMesConfirmed}</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>{ultimoMesRecovered}</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>{ultimoMesDeaths}</h5>
        </div>

        <div className="item-flex-resultados-global">
        <h4>Até o momento</h4>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{dayOneConfirmed.Cases}</h5>
            <h5><i className="fas fa-radiation float-left ml-5 text-warning"></i>{dayOneActive.Active}</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>{dayOneRecovered.Cases}</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>{dayOneDeaths.Cases}</h5>
        </div>
    </div>
</div>
    </div>

    <div className='class-global-status'>
    <h4 className='mb-5'>Situação Mundial</h4>
        <h5><i className="fas fa-check float-left ml-5 text-success"></i>{globalSummary.TotalConfirmed}</h5>
        <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>{globalSummary.TotalRecovered}</h5>
        <h5><i className="fas fa-skull float-left ml-5"></i>{globalSummary.TotalDeaths}</h5>
    </div>
    </PageDefault>
        )}};

export default Global;