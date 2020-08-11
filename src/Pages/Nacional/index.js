import React, { Component, useState } from 'react';
import apiNacional from '../../components/API/apiNacional';
import Loader from 'react-loader-spinner';
import PageDefault from '../PageDefault';
import Chart from 'react-google-charts';
import api from '../../components/API/apiCovid';
import './style.css';

class Nacional extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        status: 'São Paulo',
        value: 'SP',
        dayOneConfirmed: [],
        dayOneActives: [],
        dayOneRecovered: [],
        dayOneDeaths: [],
        listaEstados: [],
        ultimoDiaBrazil: [],
        ultimoMesBrazil: [],
        ultimoMesBrazilRecovered: [],
        ultimoMesBrazilDeaths: [],

        regiaoNorte: '',
    }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState(event);
    }
    async componentDidMount(){
        let ateHoje = await apiNacional.get(`/brazil/uf/${this.state.value}`);//${this.state.state}
        let listaEstadosApi = await apiNacional.get('');
        let paisDayOneApiConfirmed = await api.get('/dayone/country/brazil/status/confirmed')
        let paisDayOneApiActive = await api.get('/country/brazil')
        let paisDayOneApiRecovered = await api.get('/dayone/country/brazil/status/recovered')
        let paisDayOneApiDeaths = await api.get('/dayone/country/brazil/status/deaths')
        let paisUltimoDia = await api.get('/live/country/brazil/status/confirmed/date/2020-03-21T00:00:00Z')
        let paisUltimoMes = await api.get('/country/brazil/status/confirmed?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z')
        let paisUltimoMesRecovered = await api.get('/country/brazil/status/recovered?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z')
        let paisUltimoMesDeaths = await api.get('/country/brazil/status/deaths?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z')
        
        this.setState({status: ateHoje.data})
        this.setState({listaEstados: listaEstadosApi.data.data})

        this.setState({dayOneConfirmed: paisDayOneApiConfirmed.data[paisDayOneApiConfirmed.data.length - 1]})
        this.setState({dayOneActives: paisDayOneApiActive.data[paisDayOneApiActive.data.length - 1]})
        this.setState({dayOneRecovered: paisDayOneApiRecovered.data[paisDayOneApiRecovered.data.length - 1]})
        this.setState({dayOneDeaths: paisDayOneApiDeaths.data[paisDayOneApiDeaths.data.length - 1]})
        
        this.setState({ultimoDiaBrazil: paisUltimoDia.data[0]});
        this.setState({ultimoMesBrazil: paisUltimoMes.data[30].Cases - paisUltimoMes.data[0].Cases})
        this.setState({ultimoMesBrazilRecovered: paisUltimoMesRecovered.data[30].Cases - paisUltimoMesRecovered.data[0].Cases})
        this.setState({ultimoMesBrazilDeaths: paisUltimoMesDeaths.data[30].Cases - paisUltimoMesDeaths.data[0].Cases})
    }
    render(){
       const {status, dayOneConfirmed, dayOneActives, dayOneRecovered, dayOneDeaths, ultimoDiaBrazil, ultimoMesBrazil, listaEstados, ultimoMesBrazilRecovered, ultimoMesBrazilDeaths} = this.state
        
       return (
    <PageDefault>
         <Loader className='loader'
         type="Grid"
         color="#fff"
         height={100}
         width={100}
         timeout={2300}
 
      />
        <div className="container-nacional">
            <h1 className="mb-5">Nacional</h1>
        <div className="container-formulario-nacional">
            <label className="d-block">Escolha o estado para saber os dados sobre COVID</label>
        
        <select size='10' className='select-estados' onChange={(e) => this.handleChange({value: e.target.value})} >
        {listaEstados.map(retorno => (
            <option value={retorno.uf} key={retorno.uid}>{retorno.state}
        </option>
        ))}
        
        </select>

    <button onClick={(e) => this.componentDidMount(e)} id="calcular">Atualizar<i className="fas fa-recycle ml-2"></i></button>
    <div className='flex-legenda'>
            <div className='legenda-items'>
                <span><i className="fas fa-check text-success"></i> - Casos confirmados</span>
            </div>
            <div className='legenda-items'>
                <span><i className="fas fa-search text-info"></i> - Casos suspeitos</span>
            </div>
            <div className='legenda-items'>
                <span><i className="fas fa-skull"></i> - Mortes</span>
            </div>
            <div className='legenda-items'>
                <span><i className="fas fa-heart text-danger"></i> - Casos recuperados</span>
            </div>
            <div className='legenda-items'>
                <span><i className="fas fa-radiation text-warning"></i> - Casos ativos</span>
            </div>
    </div>
    <div className="display-flex-resultados">
                <div className="item-flex-resultados">
                    <h2>{this.state.status.state}</h2>
            <small>Até hoje</small>
            <h2><i className="fas fa-check float-left ml-5 text-success"></i>{status.cases}</h2>
            <h2><i title="suspeita" className="fas fa-search float-left ml-5 text-info"></i>{status.suspects}</h2>
            <h2><i className="fas fa-skull float-left ml-5"></i>{status.deaths}</h2>
        </div>
        
        <div className="item-flex-resultados">
        <h2>Brasil</h2>
            <small>Último dia</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{ultimoDiaBrazil.Confirmed}</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>{ultimoDiaBrazil.Recovered}</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>{ultimoDiaBrazil.Deaths}</h5>
            <hr/>
            <small>Último mês</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{ultimoMesBrazil}</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>{ultimoMesBrazilRecovered}</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>{ultimoMesBrazilDeaths}</h5>
            <hr/>
            <small>Até hoje</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{dayOneConfirmed.Cases}</h5>
            <h5><i className="fas fa-radiation float-left ml-5 text-warning"></i>{dayOneActives.Active}</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>{dayOneRecovered.Cases}</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>{dayOneDeaths.Cases}</h5>
        </div>

    </div>

    </div>
    </div>
</PageDefault>
       )
    }

}

export default Nacional;