import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import FormList from './FormList';
import EditForm from './EditForm';

const App = () => {
  const [forms, setForms] = useState([]);

  const addForm = (formData) => {
    setForms([...forms, { ...formData, id: Date.now().toString() }]);
  };

  const updateForm = (id, updatedForm) => {
    setForms(forms.map(f => (f.id === id ? { ...f, ...updatedForm } : f)));
  };

  const deleteForm = (id) => {
    setForms(forms.filter(f => f.id !== id));
  };

  const sendForm = (id) => {
    const form = forms.find(f => f.id === id);
    console.log("Sending form data:", form);
    alert("Form sent! Check console.");
  };

  return (
    <Routes>
      <Route path="/" element={<Form addForm={addForm} />} />
      <Route path="/forms" element={<FormList forms={forms} deleteForm={deleteForm} sendForm={sendForm} />} />
      <Route path="/edit/:id" element={<EditForm forms={forms} updateForm={updateForm} />} />
    </Routes>
  );
};

export default App;