import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import weekDays from './WeekDays';
import trash from '../../assets/img/trash.svg'
import EraseHabit from '../Habitos/EraseHabit';

export default function ListarHabitos ( { token } ) {
    const [list, setList] = useState("")
    const [color, setColor] = useState("inicio");

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
   
        
        function listar () {
             //useEffect(() => {
                const resquest =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
    
                resquest.then(resposta => {
                   console.log(resposta.data)
                   console.log(resposta.data.days)

                  setList (
                    resposta.data.map( (habitInfo, index) => 
                        

                <CardHabitoSalvo key={index}>

                      <Header>
                      <h2>{habitInfo.name}</h2>
                      <img src={trash} onClick={EraseHabit}/>
                      </Header>
                                
                     <Semana>
                    
                        {resposta.data.map((days, index) => 
                            <DiaSemana color={color} key={index} >
                            <h2>{days.days[index]}</h2>
                             </DiaSemana>)}
                     </Semana>

                 </CardHabitoSalvo>
                              )
                  )
                
                   //navigate("/")
               })
   
               resquest.catch(console.log("deu ruim listar"))    
   
             //   }, []);    
        }
        


            //      {list.days.map((day) => {
            //           const jaSelecionado = day.some(dia => dia === day.days)

            //           if (jaSelecionado) setColor(true)
                    
            //           console.log(jaSelecionado) 
                    
            //           return "deu bom"
            //   })}   
        console.log(list)

const [lista, setLista] = useState(listar)
    return (
        <Background>
            {list}
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
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;

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

const Semana = styled.div`
        display:flex;
        align-items: center;
        width: 250px;
        justify-content: space-between;
        margin-top: 8px;
`

const Background = styled.div`
    background-color: #E5E5E5;
    height: 750px;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Header = styled.div`
    width: 315px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    img {
        height: 15px;
    }
`