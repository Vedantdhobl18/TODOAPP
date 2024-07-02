
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, deleteItem, editItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
