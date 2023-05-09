import './App.css';
import { useState } from 'react';
import Form from '../Form/form';

function App(){
  const [todos, setTodos] = useState([]) // Состояние, которое хранит наше todos
  const putTodo = (value) => {
    if(value) {
      setTodos([...todos, {id: Date.now, text: value, done: false}])
    }
    else{
      alert('Add task...')
    }
  }

  return(
    <div className='wrapper'>
      <div className='container'>
        <h1 className='title'>Task List</h1>
          <Form 
          putTodo = {putTodo}/>
        <ul className='todos'>
          {
            todos.map(todo => {
              return (
                <li className='todo' key={todo.id}>
                  {todo.text}
                </li> // key нужен для удобства взаимодействия со списками. Не нужно рендерить весь список, а только тот кто + - 
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;