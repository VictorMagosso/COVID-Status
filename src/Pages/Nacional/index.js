import React, { Component, useState } from 'react';
import apiNacional from '../../components/API/apiNacional';
import Loader from 'react-loader-spinner';
import PageDefault from '../PageDefault';
import api from '../../components/API/apiCovid';
import './style.css';

class Nacional extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        status: 'São Paulo',
        sigla: 'SP',
        dayOne: [],
        listaEstados: [],
        ultimoDiaBrazil: [],
        ultimoMesBrazil: [],
        regiaoNorte: '',
    }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState(event);
    }
    async componentDidMount(){
        let ateHoje = await apiNacional.get(`/brazil/uf/${this.state.sigla.toLowerCase()}`);//${this.state.state}
        let listaEstadosApi = await apiNacional.get('');//${this.state.state}
        let paisSelecionadoApi = await api.get('/live/country/brazil/status/confirmed/date/2020-03-21T00:00:00Z')
        let paisDayOneApi = await api.get('/dayone/country/brazil/status/confirmed')
        let paisUltimoDia = await api.get('/live/country/brazil/status/confirmed/date/2020-03-21T00:00:00Z')
        let paisUltimoMes = await api.get('/country/brazil/status/confirmed?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z')
        
        this.setState({status: ateHoje.data})
        this.setState({listaEstados: listaEstadosApi.data.data})
        this.setState({ultimoDia: paisSelecionadoApi.data[0]});
        this.setState({dayOne: paisDayOneApi.data[paisDayOneApi.data.length - 1]})
        this.setState({ultimoMes: paisUltimoMes.data[30].cases - paisUltimoMes.data[0].cases})
        this.setState({ultimoDiaBrazil: paisUltimoDia.data[0]});
        this.setState({ultimoMesBrazil: paisUltimoMes.data[30].Cases - paisUltimoMes.data[0].Cases})
    }
    render(){
       const {status, dayOne, ultimoDiaBrazil, ultimoMesBrazil, regiaoNorte, listaEstados} = this.state
       console.log(this.state.status)
       console.log(this.state.sigla)
    //    const estados = [{uf:'Acre', classe: 'A1', sigla: 'AC'},{uf: 'Alagoas', classe: 'A2', sigla: 'AL'},{uf: 'Amapá', classe: 'A3', sigla: 'AP'},{uf: 'Amazonas',classe: 'A4', sigla: 'AM'},{uf: 'Bahia',classe: 'A5', sigla: 'BA'},{uf: 'Ceará', classe: 'A6', sigla: 'CE'},{uf: 'Distrito Federal', classe: 'A7', sigla: 'DF'},{uf: 'Espírito Santo', classe: 'A8', sigla: 'ES'},{uf: 'Goiás', classe: 'A9', sigla: 'GO'},{uf: 'Maranhão', classe: 'A10', sigla: 'MA'},{uf: 'Mato Grosso', classe: 'A11', sigla: 'MT'},{uf: 'Mato Grosso do Sul', classe: 'A12', sigla: 'MS'},{uf: 'Minas Gerais', classe: 'A13', sigla: 'MG'},{uf: 'Pará', classe: 'A14', sigla: 'PA'},{uf: 'Paraíba', classe: 'A15', sigla: 'PB'},{uf: 'Paraná', classe: 'A16', sigla: 'PR'},{uf: 'Pernambuco', classe: 'A17', sigla: 'PE'},{uf: 'Piauí', classe: 'A18', sigla: 'PI'},{uf: 'Rio de Janeiro', classe: 'A19', sigla: 'RJ'},{uf: 'Rio Grande do Norte', classe: 'A20', sigla: 'RN'},{uf: 'Rio Grande do Sul', classe: 'A21', sigla: 'RS'},{uf: 'Rondônia', classe: 'A22', sigla: 'RO'},{uf: 'Roraima', classe: 'A23', sigla: 'RR'},{uf: 'Santa Catarina', classe: 'A24', sigla: 'SC'},{uf: 'São Paulo', classe: 'A25', sigla: 'SP'},{uf: 'Sergipe', classe: 'A26', sigla: 'SE'},{uf: 'Tocantins', classe: 'A27', sigla: 'TO'}]
        
       return (
    <PageDefault>
         <Loader className='loader'
         type="Grid"
         color="#fff"
         height={100}
         width={100}
         timeout={1500}
 
      />
        <div className="container-nacional">
            <h1 className="mb-5">Nacional</h1>
        <div className="container-formulario-nacional">
            <label className="d-block">Escolha o estado para saber os dados sobre COVID</label>
        
        <select size='10' className='select-estados' onChange={(e) => this.handleChange({sigla: e.target.sigla})} >
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
                <span><i className="fas fa-heart text-danger"></i> - Casos recuperados</span>
            </div>
            <div className='legenda-items'>
                <span><i className="fas fa-skull"></i> - Mortes</span>
            </div>
    </div>
    <div className="display-flex-resultados">
                <div className="item-flex-resultados">
                    <h2>{this.listaEstados}</h2>
            <small>Até hoje</small>
            <h2><i className="fas fa-check float-left ml-5 text-success"></i>{status.cases}</h2>
            <h2><i title="suspeita" className="fas fa-heart float-left ml-5 text-danger"></i>{status.suspects}</h2>
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
            <hr/>
            <small>Até hoje</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>{dayOne.Cases}</h5>
        </div>

    </div>

    </div>
    </div>
    {/* <div className="item-flex-resultados">
        <h2>Por região</h2>
            <small>Último dia</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
            <hr/>
            <small>Último mês</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
            <hr/>
            <small>Até hoje</small>
            <h5><i className="fas fa-check float-left ml-5 text-success"></i>350.000</h5>
            <h5><i className="fas fa-heart float-left ml-5 text-danger"></i>350.000</h5>
            <h5><i className="fas fa-skull float-left ml-5"></i>50.000</h5>
        </div> */}
</PageDefault>
       )
    }

}

export default Nacional;