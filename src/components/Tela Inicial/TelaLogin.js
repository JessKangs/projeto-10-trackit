import { Link } from "react-router-dom";

import logo from "../../assets/img/logo-pag-inicial.svg"
import styled from 'styled-components';

export default function Login () {


    return (
        <Content>
        
            <Foto src={logo}/>
            
            <Form>

              
                    <input type="email" placeholder="email" />

                    <input type="password" placeholder="senha" />
                

                <Link to="/habitos"><button type="submit"> Entrar </button></Link>

                <Link to="/cadastro"> <h1>Não tem uma conta? Cadastre-se!</h1> </Link>            

            </Form>
        </ Content>
    )
}

const Content = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin-top: 5px;

    input {
        width: 303px;
        height: 45px;
        margin-bottom: 5px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        
    }

    input::placeholder {
        font-style: italic;
        font-size: 20px;
        color: #DBDBDB;
        display:flex;
        align-items: center;
        padding-left: 10px;
        box-sizing: border-box;

    }

    button {
        width: 310px;
        height: 45px;
        margin-bottom: 5px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        color: white;
    }

    h1 {
        color: #52B6FF;
        margin-top: 25px;
    }
`;

const Foto = styled.img`
    width: 180px;
    height: 178px;
    margin-top: 68px;
`;

const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 33px;
` 


