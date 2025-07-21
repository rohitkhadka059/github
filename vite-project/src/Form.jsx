import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ addForm }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addForm(formData);
    setFormData({ name: '', email: '' });
    navigate('/forms');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Form</h2>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
