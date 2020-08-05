import Select from 'react-select';
import React, { Component } from 'react';
import api from '../../../components/API/apiCovid';
import './style.css';

class SelectPaises extends Component {
    state= {
        status: [],
    }
    async componentDidMount(){
        const retornoCountries = await api.get('/countries');

        this.setState({status: retornoCountries.data})
    }
    render(){
       const {status} = this.state
        return (

    <Select className="select-paises"
            options={status.map(nomeDoPaisDaAPI => (
                nomeDoPaisDaAPI.Country
            ))}
    />    
    )}}

export default SelectPaises;
