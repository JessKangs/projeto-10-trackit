import styled from 'styled-components';

import ListarHabitos from "./Content Fixed/ListarHabitos"
import Header from './Content Fixed/Header';
import Footer from "./Content Fixed/Footer"


export default function Hoje ( { token, img } ) {


    return (
        <Background>
        
        <Header img={img} />


        <Main> 
            <DiaHoje>Bom dia</DiaHoje>
                <ListarHabitos token={token} />
            <Footer />
        </Main> 
        </Background>
    )

}

// const dayjs = require('dayjs') 
// {dayjs().format('DD/MMM/YYY')}

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

const DiaHoje = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Lexend Deca', sans-serif;
    margin: 28px 20px;

    h1 {
        color: #126BA5;
    font-size: 22.98px;
   
    }

    button {
        width: 40px;
        height: 35px;
        border-radius: 4.64px;
        border: none;
        background-color: #52B6FF;
        color: white;
        font-size: 30px;
}
`