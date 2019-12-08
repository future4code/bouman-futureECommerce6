import React from 'react';
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
border: 2px solid red`;

function carrinhoProd () {
    return(
    
    <CarrinhoContainer>
        Carrinho
    </CarrinhoContainer>
    )
}

export default carrinhoProd;