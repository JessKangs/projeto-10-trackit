 import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from 'react';
import styled from 'styled-components';

import TelaLogin from "./Tela Inicial/TelaLogin"
import TelaCadastro from "./Tela Inicial/TelaCadastro"
import Habits from "./Habitos"


export default function App () {



return (
    <BrowserRouter>
        
        <Routes>

        <Route path="/" element={<TelaLogin /> } />

        <Route path="/cadastro" element={<TelaCadastro /> }/>

        <Route path="/habitos" element={<Habits/> }/>

        {/* <Route path="/hoje" element={} /> 

        <Route path="/historico" element={} />  */}

        </Routes>


    </BrowserRouter>
)
}