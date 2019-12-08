import React from 'react';
import styled from 'styled-components';

const FiltrosCont = styled.div`
border: 2px solid blue;
display: flex;
flex-direction: column;
width: 10vw;
height: 20vh;
`;

function Filtros () {
    return (
        <FiltrosCont>
            <h2>Filtros:</h2>
            <label>Valor Mínimo:</label>
            <input type="number" placeholder="Valor Mínimo"></input>
            <label>Valor Máximo:</label>
            <input type="number" placeholder="Valor Máximo"></input>
            <label>Buscar Produto:</label>
            <input type="text" placeholder="Buscar Produto"></input>
        </FiltrosCont>
    
    )
}

export default Filtros;