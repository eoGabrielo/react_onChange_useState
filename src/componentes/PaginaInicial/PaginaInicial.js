import React from "react";
import { useState } from "react";
import "./style.css";

const PaginaInicial = () => {

    const [nome, setNome] = useState();

    return (
        <div className="conteudo">
            <div className="nome">
                <h1>Seja Bem-Vindo(a):</h1>
                <p>{nome}</p>
            </div>
            <div className="inputs">
                <label>Nome: </label>
                <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome*"></input>
            </div >
        </div >
    );
}

export default PaginaInicial;