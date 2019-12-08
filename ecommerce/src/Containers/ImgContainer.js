import React from 'react';
import styled from 'styled-components';
import ProdutosContainer from '../ProdutosContainer/index'
import ImageProduto1 from '../img/camiseta.jpg'

const ImgContainer = styled.div`
width: 98vw;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
border: 1px solid grey;

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