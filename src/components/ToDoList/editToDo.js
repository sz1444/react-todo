import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate, useParams } from "react-router-dom";

import InputText from './Form/inputText';
import Button from './Form/button';
import { updateToDo, selectTodoById } from '../../reducer/toDoList/toDoListSlice';

function EditToDo() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const todo = useSelector(state => selectTodoById(state, id));

  const [toDoValue, setToDoValue] = useState(todo.title);

  const onChangeToDoInput = (event) => {
    setToDoValue(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const updateTodoInputModel = {
      id: id,
      title: toDoValue,
      checked: null
    }
    dispatch(updateToDo(updateTodoInputModel));

    navigate('/');
  }

  return (
    <form onSubmit={ onSubmit }>
      <h1 className="text-2xl mb-6 border-b pb-4">Edytuj zadanie</h1>
      <InputText placeholder="Treść zadania" handleChange={ onChangeToDoInput } value={ todo.title }/>
      <Button title='Zapisz zmiany' type='submit'/>
      <Link to="/" className="
        rounded-md
        p-3
        w-full
        shadow
        text-blue-500
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

export default EditToDo;
