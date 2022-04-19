import { Link } from 'react-router-dom';
import List from './list';

function ToDoList() {
  return (
    <div>
      <h1 className="text-2xl mb-6 border-b pb-4">ToDo List</h1>
      <List />
      <Link to="/add-to-do" className="
        w-14 h-14
        shadow-xl
        rounded-full
        bg-blue-500
        text-2xl
        text-white
        absolute
        bottom-0
        transform 
        translate-y-1/2
        left-0
        right-0
        m-auto
        flex
        items-center
        justify-center
      ">
        <svg className="w-5" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/ } <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
      </Link>
    </div>
  );
}

export default ToDoList;
