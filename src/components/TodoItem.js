// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ item, index, deleteItem, editItem }) => {
  return (
    <div className="todo-item">
      <span>{item}</span>
      <button onClick={() => editItem(index)}>
        <i className="fas fa-edit"></i>
      </button>
      <button onClick={() => deleteItem(index)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
