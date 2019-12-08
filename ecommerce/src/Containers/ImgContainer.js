import React from 'react';
import styled from 'styled-components';
import ProdutosContainer from '../ProdutosContainer/index'
import ImageProduto from '../img/camiseta.jpg'

const ImgContainer = styled.div`
border: 2px solid yellow;
width: 98vw;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;



function ImgContainerPai (props) {
    const ComponentesDaListaDeProdutos = props.posts.map((eachPost) => {
        return <ProdutosContainer dadosPost = {eachPost}/>
    })

    return (
    <ImgContainer>
        
        {ComponentesDaListaDeProdutos}


    </ImgContainer>
    )
}

export default ImgContainerPai;