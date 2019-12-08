import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
border: 2px solid green
width: 15vw;
height: 47vh;
`;

const FotoProduto = styled.img`
width: 15vw;
`



const ButtonConfig = styled.button`
color: white;
background: black;
width: 15vw;
height: 5vh;
`
;


function PostProdutos (props) {
    console.log(props.dadosPost)
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