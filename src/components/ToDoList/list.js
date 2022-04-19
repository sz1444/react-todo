import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToDo, selectTodos, updateToDo } from './../../reducer/toDoList/toDoListSlice';

function List() {
  const todos = useSelector(state => selectTodos(state));

  const dispatch = useDispatch();

  const onClick = id => {
    dispatch(removeToDo(id));
  }

  const completeTask = (id, e, title) => {

    const updateTodoInputModel = {
      id: id,
      title: null,
      completed: e.target.checked
    }

    dispatch(updateToDo(updateTodoInputModel));
  }

  const list = (
    <ul>
      { todos.map(todo => 
        <li key={ todo.id } className="p-4 px-4 w-full shadow-3xl text-sm bg-white rounded-md mb-2 flex justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              defaultChecked={ todo.completed }
              onChange={ (e) => { completeTask(todo.id, e) } }
            />
            <p className={ todo.completed ? 'text-gray-500 line-through' : '' }>
              { todo.title }
            </p>
          </label>
          <div className='flex justify-center items-center'>
            <Link to={ '/edit/' + todo.id }>
              <svg className="h-4 mr-3 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/ } <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>
            </Link>
            <button onClick={ () => { onClick(todo.id) } } className="text-2xl text-gray-500">
              <svg className="h-4 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"> {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/ } <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
            </button>
          </div>
        </li> 
      )}
    </ul>
  )

  return (
    <div>
      { !todos.length ? <p className='text-sm'>Nic jeszcze nie dodałeś.</p> : list }
    </div>
  );
}
  
export default List;
  