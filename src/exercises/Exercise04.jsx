import React, { useReducer } from 'react';
import Usuario4 from '../components/Usuario4'; 

const inicio = {
  usuarios: [{ chave: 1, nome: '', idade: 21 }], 
};

const redutor = (state, action) => {
  switch (action.type) {
    case 'SET_NOME':
      return {
        ...state,
        usuarios: state.usuarios.map(usuario =>
          usuario.chave === action.payload.chave ? { ...usuario, nome: action.payload.nome } : usuario
        ),
      };
    case 'AUMENTAR_IDADE':
      return {
        ...state,
        usuarios: state.usuarios.map(usuario =>
          usuario.chave === action.payload.chave ? { ...usuario, idade: usuario.idade + 1 } : usuario
        ),
      };
    case 'DIMINUIR_IDADE':
      return {
        ...state,
        usuarios: state.usuarios.map(usuario =>
          usuario.chave === action.payload.chave ? { ...usuario, idade: usuario.idade - 1 } : usuario
        ),
      };
    case 'ADICIONAR_USUARIO':
      return {
        ...state,
        usuarios: [
          ...state.usuarios,
          { chave: state.usuarios.length + 1, nome: '', idade: 0 },
        ],
      };
      case 'DELETAR_USUARIO':
        return {
          ...state,
          usuarios: state.usuarios.filter(usuario => usuario.chave !== action.payload.chave),
        };
    default:
      return state;
  }
};

const Exercise04 = () => {
  const [state, dispatch] = useReducer(redutor, inicio);

  const mudarNome = (chave, novoNome) => {
    dispatch({ type: 'SET_NOME', payload: { chave, nome: novoNome } });
  };

  const MudancaMaisIdade = (chave) => {
    dispatch({ type: 'AUMENTAR_IDADE', payload: { chave } });
  };

  const MudancaMenosIdade = (chave) => {
    dispatch({ type: 'DIMINUIR_IDADE', payload: { chave } });
  };

  const AdicionarUsuario = () => {
    dispatch({ type: 'ADICIONAR_USUARIO' });
  };
  const DeletarUsuario = (chave) => {
    dispatch({type: 'DELETAR_USUARIO', payload: {chave} });
  };

  return (
    <div>
      <h1>Exercício 04</h1>
      <button onClick={AdicionarUsuario}>Inserir</button>
      {state.usuarios.map((usuario) => (
        <Usuario4
          key={usuario.chave}
          nome={usuario.nome}
          idade={usuario.idade}
          mudarNome={(novoNome) => mudarNome(usuario.chave, novoNome)}
          aumentarIdade={() => MudancaMaisIdade(usuario.chave)}
          diminuirIdade={() => MudancaMenosIdade(usuario.chave)}
          deletarUsuario={() => DeletarUsuario(usuario.chave)}
        />
      ))}
    </div>
  );
};

export default Exercise04;