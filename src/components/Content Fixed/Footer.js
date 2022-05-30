import { CircularProgressbar,
    buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

export default function Footer () {
    const percentage = "Hoje";
    const value = 66;

    return (
        <>

        <Bottom>
            <h1> Hábitos </h1>
            <CircularProgressbar value={value}
        text={`${percentage}`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}/>
            <h1> Histórico </h1>
        </Bottom>
        </>
    )
}

const Bottom = styled.div`
    width: 90%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display:flex;
    align-items: center;
    padding: 0 36px;

    h1 {
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
    }
`
