import styled from 'styled-components';

import MeusHabitos from "./Content Fixed/MeusHabitos"
import Footer from "./Content Fixed/Footer"
import Header from "./Content Fixed/Header"
import ListarHabitos from './Content Fixed/ListarHabitos';


export default function Habits ( { token, img }) {


    return (
        <Background>
        
        <Header img={img}/>

        <Main> 
            <MeusHabitos token={token} /> 

            <ListarHabitos token={token} />

            <Footer />
        </Main>
        </Background>
    )
}


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