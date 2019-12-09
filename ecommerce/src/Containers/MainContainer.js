import React from 'react';
import styled from 'styled-components';
import FiltrosContainer from '../FiltrosContainer/index'
import HeaderContainer from '../HeaderContainer/index'
import ImgContainer from '../Containers/ImgContainer'
import Prod1 from '../img/camiseta.jpg'
import Prod2 from '../img/camiseta2.jpg'
import Prod3 from '../img/camiseta3.png'
import Prod4 from '../img/camiseta4.jpg'
import Prod5 from '../img/camiseta7.jpg'
import Prod6 from '../img/camiseta9.jpg'


const FormContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-content: flex-start;
`;

const ListaDeProdutos = [
    {
        id: 1,
        urlImagem: Prod1,
        nomeProduto: "Camiseta Espacial 1",
        precoProduto: 59.90,
    },
  
    {
        id: 2,
        urlImagem: Prod2,
        nomeProduto: "Camiseta Espacial 2",
        precoProduto: 49.90,
  
    },

    {
        id: 3,
        urlImagem: Prod3,
        nomeProduto: "Camiseta Espacial 3",
        precoProduto: 69.90,
  
    },

    {
        id: 4,
        urlImagem: Prod4,
        nomeProduto: "Camiseta Espacial 4",
        precoProduto: 89.90,
  
    },

    {
        id: 5,
        urlImagem: Prod5,
        nomeProduto: "Camiseta Espacial 5",
        precoProduto: 109.90,
  
    },

    {
        id: 6,
        urlImagem: Prod6,
        nomeProduto: "Camiseta Espacial 6",
        precoProduto: 79.90,
  
    }
  ]





class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valorMinimo : ""
        }
    }

    render(){
    
    return( 
        
    
        <FormContainer>

            <FiltrosContainer/>

            <HeaderContainer/>
            
            <ImgContainer posts={ListaDeProdutos}/>
            
        </FormContainer>
    )
}

}

export default MainContainer;