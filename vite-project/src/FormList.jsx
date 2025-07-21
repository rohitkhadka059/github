import React from 'react';
import { Link } from 'react-router-dom';

const FormList = ({ forms, deleteForm, sendForm }) => {
  return (
    <div>
      <h2>All Forms</h2>
      <Link to="/">Add New</Link>
      <ul>
        {forms.map((form) => (
          <li key={form.id}>
            <p>Name: {form.name} | Email: {form.email}</p>
            <Link to={`/edit/${form.id}`}>Edit</Link>
            <button onClick={() => deleteForm(form.id)}>Delete</button>
            <button onClick={() => sendForm(form.id)}>Send</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;