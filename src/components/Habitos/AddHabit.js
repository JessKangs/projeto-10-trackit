import styled from 'styled-components';
import SaveHabit from './SaveHabit';

export default function AddHabit () {

    

            return (
                <Card>
                    <input placeholder="nome do habito" />
                   <Botoes>

                    <h1>Cancelar</h1>
                    <button onClick={salvarHabito}>Salvar</button>

                   </Botoes>
                </Card>
            )
        }

        function salvarHabito () {
            return (<AddHabit/>)
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
            font-color: #DBDBDB;
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
        margin-top: 60px;
        width: 190px;
`