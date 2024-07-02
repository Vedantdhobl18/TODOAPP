// src/components/AddItem.js
import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addItem(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add something to your list"
      />
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default AddItem;
