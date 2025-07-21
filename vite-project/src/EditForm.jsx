import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditForm = ({ forms, updateForm }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingForm = forms.find(f => f.id === id);
  const [formData, setFormData] = useState(existingForm || { name: '', email: '' });

  useEffect(() => {
    if (!existingForm) {
      alert("Form not found");
      navigate('/forms');
    }
  }, [existingForm, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateForm(id, formData);
    navigate('/forms');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Form</h2>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditForm;
