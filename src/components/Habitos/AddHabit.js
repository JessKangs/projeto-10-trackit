import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

export default function AddHabit ( { token } ) {
    const [nomeHabito, setNomeHabito] = useState("");
    //const [whichDay, setWhichDay] = useState([]);
    const navigate = useNavigate();
console.log(token)
    const weekDays = [
        {diaSemana: "D",
            id: 1},
        {diaSemana: "S",
            id: 2},
        {diaSemana: "T",
            id: 3},
        {diaSemana: "Q",
            id: 4}, 
        {diaSemana: "Q",
            id: 5}, 
        {diaSemana: "S",
            id: 6}, 
        {diaSemana: "S",
            id: 7}]

    const selecionados = []; 

            function salvar (event) {
                event.preventDefault();
        
                const info = {
                   name: nomeHabito,
                   days: selecionados
               }
                console.log(info)

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
           
                         const request =  axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, info, config);
                
                         request.then(resposta => {
                         
                             console.log(resposta.data)
                           
                             navigate("/habitos")
                         });
        
                         request.catch(console.log("deu ruim salvar"))
                    }
    

            return (
                <Card>
                    <input placeholder="nome do habito" onChange={(e) => setNomeHabito(e.target.value)} value={nomeHabito} name="name"/>

                    <Semana>
                        {weekDays.map( (day, index) => 
                        <DiaSemana key={index} onClick={() => 
                        {
                            const jaSelecionado = selecionados.some(dia => dia === day.id)

                            if (!jaSelecionado) selecionados.push(day.id);
                            
                            console.log(selecionados)
                            
                            console.log(jaSelecionado) 
                            
                        }
                
                        }>
                        <h2>{day.diaSemana}</h2>
                        </DiaSemana> )}
                        
                    </Semana>

                   <Botoes>

                    <h1>Cancelar</h1>
                    <button onClick={salvar}>Salvar</button>

                   </Botoes>
                </Card>
            )

        }

     

const Card = styled.div`
        width: 340px;
        height: 180px;
        background-color: white;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        padding: 20px;
        box-sizing: border-box;
        margin: 0 auto;

        input {
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            width: 293px;
            height: 45px;
            padding-left: 11px;
            box-sizing: border-box;
            display:flex;
            align-items: center;
            
        }

        input::placeholder {
            color: #DBDBDB;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
        }

        button {
            font-family: 'Lexend Deca', sans-serif;
            border: none;
            border-radius: 5px;
            background-color: #52B6FF;
            color: #FFFFFF;
            font-size: 16px;
            width: 84px;
            height: 35px;
            
        }

        h1 {
            color: #52B6FF;
            font-size: 16px;
        }

`

const Botoes = styled.div`
        display:flex;
        align-items: center;
        justify-content: space-between;
        float: right;
        margin-top: 30px;
        width: 190px;
`

const Semana = styled.div`
        display:flex;
        align-items: center;
        width: 250px;
        justify-content: space-between;
        margin-top: 8px;
`

const DiaSemana = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: white;

        h2 {
            font-size: 20px;
            color: #DBDBDB;
        }
`
