import React, { useState } from "react";
import "./styles.css"; // Crie um arquivo CSS para estilização

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    console.log("Dados enviados:", { nome, email, senha });
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="number"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
