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
        state: 'sp',
        status: 'São Paulo',
        dayOne: [],
        ultimoDiaBrazil: [],
        ultimoMesBrazil: [],
        regiaoNorte: '',
    }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState(event);
    }
    // async regiaoNorte(){
    // let ac = await apiNacional.get('/brazil/uf/ac');
    // let am = await apiNacional.get('/brazil/uf/am');
    // let ro = await apiNacional.get('/brazil/uf/ro');
    // let rr = await apiNacional.get('/brazil/uf/rr');
    // let pa = await apiNacional.get('/brazil/uf/pa');

    // this.setState({regiaoNorte: ac.data.cases})
    // this.setState({regiaoNorte: am.data.cases})
    // this.setState({regiaoNorte: ro.data.cases})
    // this.setState({regiaoNorte: rr.data.cases})
    // this.setState({regiaoNorte: pa.data.cases})

    // let somaRegiaoNorte = ac + am + ro + rr + pa;
    // console.log(ac)

    // }
    async componentDidMount(){
        let ateHoje = await apiNacional.get(`/brazil/uf/sp`);//${this.state.state}
        let paisSelecionadoApi = await api.get('/live/country/brazil/status/confirmed/date/2020-03-21T00:00:00Z')
        let paisDayOneApi = await api.get('/dayone/country/brazil/status/confirmed')
        let paisUltimoDia = await api.get('/live/country/brazil/status/confirmed/date/2020-03-21T00:00:00Z')
        let paisUltimoMes = await api.get('/country/brazil/status/confirmed?from=2020-07-01T00:00:00Z&to=2020-07-31T00:00:00Z')
        
        this.setState({status: ateHoje.data})

        this.setState({ultimoDia: paisSelecionadoApi.data[0]});
        this.setState({dayOne: paisDayOneApi.data[paisDayOneApi.data.length - 1]})
        this.setState({ultimoMes: paisUltimoMes.data[30].cases - paisUltimoMes.data[0].cases})
        this.setState({ultimoDiaBrazil: paisUltimoDia.data[0]});
        this.setState({ultimoMesBrazil: paisUltimoMes.data[30].Cases - paisUltimoMes.data[0].Cases})
    }
    render(){
       const {status, dayOne, ultimoDiaBrazil, ultimoMesBrazil, regiaoNorte} = this.state
       const estados = [{uf:'Acre', classe: 'A1'},{uf: 'Alagoas', classe: 'A2'},{uf: 'Amapá', classe: 'A3'},{uf: 'Amazonas',classe: 'A4'},{uf: 'Bahia',classe: 'A5'},{uf: 'Ceará', classe: 'A6'},{uf: 'Distrito Federal', classe: 'A7'},{uf: 'Espírito Santo', classe: 'A8'},{uf: 'Goiás', classe: 'A9'},{uf: 'Maranhão', classe: 'A10'},{uf: 'Mato Grosso', classe: 'A11'},{uf: 'Mato Grosso do Sul', classe: 'A12'},{uf: 'Minas Gerais', classe: 'A13'},{uf: 'Pará', classe: 'A14'},{uf: 'Paraíba', classe: 'A15'},{uf: 'Paraná', classe: 'A16'},{uf: 'Pernambuco', classe: 'A17'},{uf: 'Piauí', classe: 'A18'},{uf: 'Rio de Janeiro', classe: 'A19'},{uf: 'Rio Grande do Norte', classe: 'A20'},{uf: 'Rio Grande do Sul', classe: 'A21'},{uf: 'Rondônia', classe: 'A22'},{uf: 'Roraima', classe: 'A23'},{uf: 'Santa Catarina', classe: 'A24'},{uf: 'São Paulo', classe: 'A25'},{uf: 'Sergipe', classe: 'A26'},{uf: 'Tocantins', classe: 'A27'}]
       let i = 0;
        let nomeClasse = ''
        
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
        
        <select size='10' className='select-estados'>
        {estados.map((retorno, indice) => (
            
        <option className={retorno.classe} value={retorno.state} key={retorno.uf}>{retorno.uf}</option>))}
        
        </select>

    <button id="calcular">Atualizar<i className="fas fa-recycle ml-2"></i></button>

    <div className="display-flex-resultados">
                <div className="item-flex-resultados">
                    <h2>{status.state}</h2>
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