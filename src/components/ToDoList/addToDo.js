import { useState } from 'react';
import { createToDo } from '../../reducer/toDoList/toDoListSlice';
import { useDispatch  } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from "react-router-dom";

import InputText from './Form/inputText';
import Button from './Form/button';

function AddToDo() {
  const [toDoValue, setToDoValue] = useState('');

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const onChangeToDoInput = (event) => {
    setToDoValue(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const createTodoInputModel = {
      id: uuid(),
      title: toDoValue
    }
    dispatch(createToDo(createTodoInputModel));

    navigate('/');
  }

  return (
    <form onSubmit={ onSubmit }>
      <h1 className="text-2xl mb-6 border-b pb-4">Dodaj nowe zadanie</h1>
      <InputText placeholder="Wprowadź treść zadania" handleChange={ onChangeToDoInput } />
      <Button title='Dodaj zadanie' type='submit'/>
      <Link to="/" className="
        rounded-md
        p-3
        w-full
        shadow
        bg-white
        flex
        items-center
        justify-center
        mt-2
        text-sm
      ">Anuluj</Link>
    </form>
  );
}

export default AddToDo;
