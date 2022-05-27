import styled from 'styled-components';

import logoNome from "../assets/img/TrackIt.svg"
import MeusHabitos from "./Content Fixed/MeusHabitos"
import Footer from "./Content Fixed/Footer"


export default function Habits () {


    return (
        <Background>
        
        <Header>

            <img src={logoNome} alt="trackit logo"/>

        </Header>


        <Main> 
            <MeusHabitos /> 
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Footer />
        </Main>
        </Background>
    )
}

const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display:flex;
    align-items: center;

    img {
        width: 97px;
        height: 49px;
        margin-left: 18px;
        
    }

`;

const Main = styled.div`

    p {
        font-size: 18px;
        color: #666666;
        padding: 0 20px;
        margin-top: 29px;
       
    }
`;

const Background = styled.div`
    background-color: #E5E5E5;
    height: 750px;
    overflow-y: hidden;
`