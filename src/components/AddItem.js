
import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && category) {
      addItem({ text: input, category });
      setInput('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>Select category</option>
        <option value="Learning">Learning</option>
        <option value="Shopping">Shopping</option>
        <option value="Medical">Medical</option>
        <option value="Work">Work</option>
      </select>
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default AddItem;
