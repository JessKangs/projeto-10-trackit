import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListarHabitos ( { token } ) {
    const [list, setList] = useState("")
    const [color, setColor] = useState(false);

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
   
            useEffect(() => {
                const resquest =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
    
                resquest.then(resposta => {
                   console.log(resposta.data)
                   setList(resposta.data)
                   //navigate("/")
               })
   
               resquest.catch(console.log("deu ruim listar"))    
   
                }, []);    

                //  {list.days.map((day) => {
                //      const jaSelecionado = day.some(dia => dia === day.days)

                //      if (jaSelecionado) setColor(true)
                    
                //      console.log(jaSelecionado) 
                    
                //      return "deu bom"
                //  })}   
        console.log(list)

    return (
        <Background>
            <CardHabitoSalvo>
            
            {list.map( habitDay => 
                    <>
                    <h2>habitDay</h2>
                    <DiaSemana color={color} >
                    <h2>{habitDay[0]}</h2>
                    </DiaSemana> 
                    </>
                )}

            </CardHabitoSalvo>
        </Background>
    )

}

// {listaHabitos.length !== 0 ? console.log(listaHabitos) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}

const CardHabitoSalvo = styled.div`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 10px;

    h1 {
       margin-left: 15px;
       margin-top: 13px;
       font-size: 20px;
       color: #666666; 
    }
`

const DiaSemana = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: ${(color) => color ? "#CFCFCF" : "white"};

        h2 {
            font-size: 20px;
            color: ${(color) => color ? "white" : "#DBDBDB"}
        }
`
const Background = styled.div`
    background-color: #E5E5E5;
    height: 750px;
    overflow-y: hidden;
`