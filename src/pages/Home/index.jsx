import React, { useState } from 'react';

import './styles.css';
import { Card } from '../../components/Cards';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(listaAnterior => [...listaAnterior, newStudent]);
    // listaAnterior é um vetor com informações anteriores que; com uma arrowfunciton retorna (...) dentro do vetor e adiciona o newStudent
  }

  return (
    <div className="container">
      <h1>Lista Presença </h1>

      <input 
        type="text" 
        placeholder="Digite seu nome..." 
        onChange={e => setStudentName(e.target.value)}
      />

      <button 
        type="button" onClick={handleAddStudent}>
        Adicionar
      </button>


      {
        students.map(student =>
          < Card 
            key={student.time} //identidade. Pode ser o ID
            name={student.name}
            time={student.time}
          />
        )
      }
      
      
    </div>
  )
}

