import React from 'react';
import styled from 'styled-components';
import FiltrosContainer from '../FiltrosContainer/index'
import HeaderContainer from '../HeaderContainer/index'
import ImgContainer from '../Containers/ImgContainer'

const FormContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-content: flex-start;
`;

const ListaDeProdutos = [
    {
        id: 1,
        urlImagem: "https://picsum.photos/100/100",
        nomeProduto: "Camiseta Espacial 1",
        precoProduto: 59.90,
    },
  
    {
        id: 2,
        urlImagem: "https://picsum.photos/100/100",
        nomeProduto: "Camiseta Espacial 2",
        precoProduto: 49.90,
  
    }
  ]



function MainContainer (props) {

    
    
    return( 
        
    
        <FormContainer>

            <FiltrosContainer/>

            <HeaderContainer/>
            
            <ImgContainer posts={ListaDeProdutos}/>
            
        </FormContainer>
    )
}

export default MainContainer;