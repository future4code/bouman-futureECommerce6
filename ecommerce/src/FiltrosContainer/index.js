import React from 'react';
import styled from 'styled-components';

const FiltrosCont = styled.div`
display: flex;
flex-direction: column;
width: 10vw;
height: 20vh;
`;








class  Filtros extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valorMinimo: "",
            valorMaximo: "",
        }
    }

    ColocandoValorMinimo = (event) => {
        {this.props.valorMinimo = event.target.value}
    }

    
    
    render(){
    return (
        <FiltrosCont>
            <h2>Filtros:</h2>
            <label>Valor Mínimo:</label>
            <input type="number" placeholder="Valor Mínimo" value={this.state.valorMinimo} onChange={this.ColocandoValorMinimo}></input>
            <label>Valor Máximo:</label>
            <input type="number" placeholder="Valor Máximo"></input>
            <label>Buscar Produto:</label>
            <input type="text" placeholder="Buscar Produto"></input>
        </FiltrosCont>
    )
    }
}


export default Filtros;