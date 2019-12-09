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
            valorMinimo: '',
            valorMaximo: "",
        }
    }



    ColocandoValorMax = (event) => {
        this.setState ({
            valorMaximo: event.target.value
            
        }), function (){console.log(this.state.valorMaximo)}
        
    
    }
    
    ColocandoValorMinimo = (event) => {
        console.log(this.state.valorMinimo)
        this.setState ({
            valorMinimo: event.target.value
        })
        
    }
    
    
    
    render(){
    return (
        <FiltrosCont>
            <h2>Filtros:</h2>
            <label>Valor Mínimo:</label>
            <input type="number" onChange={this.ColocandoValorMinimo} value={this.state.valorMinimo}></input>
            <label>Valor Máximo:</label>
            <input onKeyDown={this.ColocandoValorMax} type="number" placeholder="Valor Máximo"></input>
            <label>Buscar Produto:</label>
            <input type="text" placeholder="Buscar Produto"></input>
        </FiltrosCont>
    )
    }
}


export default Filtros;