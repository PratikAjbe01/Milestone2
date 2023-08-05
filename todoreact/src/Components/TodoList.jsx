import React, { useState } from 'react';
import './TodoList.css';

function TodoList(props) {
  const [status, setStatus] = useState("Pending");

  const handleStatusUpdate = () => {
    setStatus(status === "Pending" ? "Completed" : "Pending");
    console.log("yes, it's working");
  };

  return (
    <div className='todoicon'>
      <h1>{`${props.index + 1}. ${props.item}`}</h1>
      <p>Status: {status}</p>
      <button onClick={handleStatusUpdate}>Update Status</button>
      <button onClick={props.handleRemoveTodo}>Remove</button>
    </div>
  );
}

export default TodoList;
