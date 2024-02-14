import React, { useState, ChangeEvent, FormEvent } from 'react';

interface StudentData {
  name: string;
  surname: string;
  age: string;
}

export default function AddStudent() {
  const [formData, setFormData] = useState<StudentData>({ name: '', surname: '', age: '' });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    console.log('hallo');
  };

  return (
    <div>
      <p>Форма для добавления студента:</p>
      <form onSubmit={submitHandler}>
        <input value={formData.name} type="text" name="name" placeholder="name" onChange={changeHandler} />
        <input value={formData.surname} type="text" name="surname" placeholder="surname" onChange={changeHandler} />
        <input value={formData.age} type="text" name="age" placeholder="age" onChange={changeHandler} />
        <button>Добавить</button>
      </form>
    </div>
  );
}