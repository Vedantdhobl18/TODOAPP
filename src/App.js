
import React, { useState, useEffect } from 'react';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';
import './styles/App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('todoItems'));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const editItem = (index) => {
    const newItems = [...items];
    const newItem = prompt("Edit item:", newItems[index].text);
    if (newItem !== null) {
      newItems[index].text = newItem;
      setItems(newItems);
    }
  };

  const deleteList = () => {
    setItems([]);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddItem addItem={addItem} />
      <TodoList items={items} deleteItem={deleteItem} editItem={editItem} />
      <button className="delete-list" onClick={deleteList}>Delete List</button>
    </div>
  );
};

export default App;
