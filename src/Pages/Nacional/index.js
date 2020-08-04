import React, { Component, useState } from 'react';
import apiNacional from '../../components/API/apiNacional';
import './style.css';
import PageDefault from '../PageDefault';

class Nacional extends Component {
    state= {
        status: [],
    }
    render(){
        
       const {status} = this.state

       return (
<PageDefault>
    <div className="container-nacional">
    <h1 className="mb-5">Nacional</h1>
    <div className="container-formulario-nacional">
        <label className="d-block">Escolha o estado para saber os dados sobre COVID</label>
    <select size="10" className="select-cidades" ref={uf}>
        <option value="ac" className="AC">Acre</option>
        <option value="al" className="AL">Alagoas</option>
        <option value="ap" className="AP">Amapá</option>
        <option value="am" className="AM">Amazonas</option>
        <option value="ba" className="BA">Bahia</option>
        <option value="ce" className="CE">Ceará</option>
        <option value="df" className="DF">Distrito Federal</option>
        <option value="es" className="ES">Espírito Santo</option>
        <option value="go" className="GO">Goiás</option>
        <option value="ma" className="MA">Maranhão</option>
        <option value="mt" className="MT">Mato Grosso</option>
        <option value="ms" className="MS">Mato Grosso do Sul</option>
        <option value="mg" className="MG">Minas Gerais</option>
        <option value="pa" className="PA">Pará</option>
        <option value="pb" className="PB">Paraíba</option>
        <option value="pr" className="PR">Paraná</option>
        <option value="pe" className="PE">Pernambuco</option>
        <option value="pi" className="PI">Piauí</option>
        <option value="rj" className="RJ">Rio de Janeiro</option>
        <option value="rn" className="RN">Rio Grande do Norte</option>
        <option value="rs" className="RS">Rio Grande do Sul</option>
        <option value="ro" className="RO">Rondônia</option>
        <option value="rr" className="RR">Roraima</option>
        <option value="sc" className="SC">Santa Catarina</option>
        <option value="sp" className="SP">São Paulo</option>
        <option value="se" className="SE">Sergipe</option>
        <option value="to" className="TO">Tocantins</option>
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
    async componentDidMount(){
        const [estado, setEstado] = useState('estado')
        const uf = React.useRef({ref})
        const res = await apiNacional.get(`/brazil/uf/${setEstado(uf)}`);

        this.setState({status: res.data})
    }
}

export default Nacional;