import Select from 'react-select';
import React, { Component } from 'react';
import apiNac from '../../../components/API/apiNacional';
import './style.css';

class SelectEstados extends Component {
    state= {
        estados: [],
    }
    async componentDidUpdate(){
        const retornoEstados = await apiNac.get('');

        this.setState({estados: retornoEstados.data})
    }
    render() {
       const {estados} = this.state
        return (

    <Select className="select-estados"
            options={estados.map(listaEstados => (
                listaEstados.uf
        ))}    
    />

    )}}
export default SelectEstados;
