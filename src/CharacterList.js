import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Lista de personajes de Rick and Morty</h1>

      <table>
      <thead>
        <tr>
          <th>Columna 1</th>
          <th>Columna 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{characters.map(character => (
          <p key={character.id}>{character.name}</p>
        ))}</td>
          <td>{characters.map(character => (
          <p key={character.id}>{character.name}</p>
        ))}</td>
        </tr>
      </tbody>
    </table>


      
    </div>
  );
};

export default CharacterList;
