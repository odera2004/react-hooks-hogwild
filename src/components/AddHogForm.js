import React, { useState } from 'react';

const AddHogForm = ({ addHog }) => {
    
  const [newHog, setNewHog] = useState({
    name: '',
    specialty: '',
    greased: false,
    weight: '',
    "highest medal achieved": '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog(prevHog => ({
      ...prevHog,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(newHog);
    setNewHog({
      name: '',
      specialty: '',
      greased: false,
      weight: '',
      "highest medal achieved": '',
      image: ''
    });
  };

  return (
    <div className="container-fluid">
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={newHog.name} onChange={handleChange} placeholder="Name" required /><br></br>
      <input type="text" name="specialty" value={newHog.specialty} onChange={handleChange} placeholder="Specialty" required />
      <input type="number" name="weight" value={newHog.weight} onChange={handleChange} placeholder="Weight" required />
      <input type="text" name="highest medal achieved" value={newHog["highest medal achieved"]} onChange={handleChange} placeholder="Highest Medal Achieved" required />
      <input type="url" name="image" className="image" value={newHog.image} onChange={handleChange} placeholder="Image URL" required />
      <label>
        Greased
        <input type="checkbox" name="greased" checked={newHog.greased} onChange={handleChange} />
      </label>
      <button type="submit">Add Hog</button>
    </form>
    </div>
  );
};

export default AddHogForm;
