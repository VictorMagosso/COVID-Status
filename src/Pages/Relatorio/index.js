import React, { Component } from 'react';
import Chart from 'react-google-charts';
import {Link} from 'react-router-dom';
import PageDefault from '../PageDefault'
import api from '../../components/API/apiNacional'
import './style.css';

class Relatorio extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', status: [],};
    
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange(event) {
        this.setState({value: event.target.value});
      }

    async componentDidMount(){
        const retornoCountries = await api.get('/all');

        this.setState({status: retornoCountries.data})
    }
    render(){
        return (
            <PageDefault>
                <h1>Relatório geral - COVID-19</h1>
                <div className="container-relatorio container-flex-relatorio">
                <Chart
  width={'500px'}
  height={'500px'}
  chartType="PieChart"
  loader={<div>Carregando...</div>}
  data={[
    ['Status', 'Até hoje'],
    ['Morte', 100],
    ['Recuperado', 300],
    ['Confirmado', 1000],
  ]}
  options={{
    title: 'COVID-19',
    // Just add this option
    pieHole: 0.4,
  }}
  rootProps={{ 'data-testid': '3' }}
/>

<Chart
  width={'500px'}
  height={'500px'}
  chartType="PieChart"
  loader={<div>Carregando...</div>}
  data={[
    ['Status', 'Até hoje'],
    ['Morte', 100],
    ['Recuperado', 300],
    ['Confirmado', 1000],
  ]}
  options={{
    title: 'COVID-19',
    // Just add this option
    pieHole: 0.4,
  }}
  rootProps={{ 'data-testid': '3' }}
/>

<Chart
  width={'500px'}
  height={'500px'}
  chartType="PieChart"
  loader={<div>Carregando...</div>}
  data={[
    ['Status', 'Até hoje'],
    ['Morte', 100],
    ['Recuperado', 300],
    ['Confirmado', 1000],
  ]}
  options={{
    title: 'COVID-19',
    // Just add this option
    pieHole: 0.4,
  }}
  rootProps={{ 'data-testid': '3' }}
/>
                </div>
            </PageDefault>

)}}

export default Relatorio;