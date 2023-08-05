import React, { useState } from 'react';
import './App.css';
import TodoList from './Components/todoList';

function App() {
  const [todo, setTodo] = useState('');
  const [todosList, setTodosList] = useState([]);

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      setTodosList([...todosList, todo]);
      setTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todosList];
    updatedTodos.splice(index, 1);
    setTodosList(updatedTodos);
  };

  return (
    <>
      <div className="container">
        <div className='addlist'>
          <input
            placeholder='add-todo'
            value={todo}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <div className="cards">
          {todosList.map((item, index) => (
            <TodoList
              key={index}
              item={item}
              index={index}
              handleRemoveTodo={() => handleRemoveTodo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
