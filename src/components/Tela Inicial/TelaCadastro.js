import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';


import logo from "../../assets/img/logo-pag-inicial.svg"

export default function Cadastro () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");


    function cadastrar (event) {
         event.preventDefault();

         const data = {
            email,
            senha,
            nome,
            foto
        }
         
             const request =  axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, data);
    
            

    
    console.log(data) 
    }
   

    return (
        <Content>
        
        <Foto src={logo}/>
        
            <form method="post">

                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="email" required />

                <input onChange={(e) => setSenha(e.target.value)} value={senha} type="password" placeholder="senha"  required />

                <input onChange={(e) => setNome(e.target.value)} value={nome} type="text" placeholder="nome" required />

                <input onChange={(e) => setFoto(e.target.value)} value={foto} type="url" placeholder="foto" required />

                <Link to="/habitos"><button type="submit" onClick={cadastrar}> Cadastrar </button></Link>

                <Link to="/"> <h1>Já tem uma conta? Faça o login!</h1> </Link>            

            </form>
        
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

    form {
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top: 33px;
    }
`;

const Foto = styled.img`
    width: 180px;
    height: 178px;
    margin-top: 68px;
`;

