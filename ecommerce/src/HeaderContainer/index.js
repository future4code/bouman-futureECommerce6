import React from 'react';
import styled from 'styled-components';
import Carrinho from '../CarrinhoContainer/index'

const HeadContainer = styled.div`
border: 1px solid pink;
height: 20vh;
width: 88vw;
display:flex;
justify-content: space-between;
select {
    height: 20px
}
`;


function HeaderProdutos () {
    return(
    <HeadContainer>
        <h4>Quantidade de itens: 0</h4>
        <select name="select">
            <option value="valor1" selected>Preço: Crescente</option>
            <option value="valor2">Preço: Decrescente</option>

        </select>
        <Carrinho/>
    </HeadContainer>
    )
     
}

export default HeaderProdutos;