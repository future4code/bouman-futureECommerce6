import React from 'react';
import styled from 'styled-components';
import ProdutosContainer from '../ProdutosContainer/index'

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

    const ComponentesFiltrados = props.posts.filter((eachElement) => {
      if (eachElement.precoProduto > props.vMin){
          return true
      }  else {
          return false
      }
    })

    return (
    <ImgContainer>
        
        {ComponentesFiltrados.map((eachPost) => {
            return <ProdutosContainer dadosPost = {eachPost}/>
        })
        }


    </ImgContainer>
    )
}

export default ImgContainerPai;