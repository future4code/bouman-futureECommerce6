import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
width: 15vw;
height: 30vh;
border: 1px solid black;
display: flex;
flex-direction: column;
align-items: center;
`;

const FotoProduto = styled.img`
width: 200px;
height: 200px;
`



const ButtonConfig = styled.button`
color: white;
background: black;
width: 15vw;
height: 5vh;
`
;


function PostProdutos (props) {
    return(
        <ProdutosContainer>
            
            <FotoProduto src={props.dadosPost.urlImagem}/>
            <p>{props.dadosPost.nomeProduto}</p>
            <p>R$ {props.dadosPost.precoProduto}0</p>
            <ButtonConfig> Comprar</ButtonConfig>
        
        
        </ProdutosContainer>

    ) 
}

export default PostProdutos;