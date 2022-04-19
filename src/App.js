import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';

import ToDoList from './components/ToDoList/toDoList';
import AddToDo from './components/ToDoList/addToDo';
import EditToDo from './components/ToDoList/editToDo';

function App() {
  return (
    <Provider store={store}>
    <React.StrictMode>
      <div className="App flex justify-center items-center min-h-screen bg-slate-100">
        <div className="w-128 p-8 shadow-xl bg-white relative text-gray-800 rounded-md pb-12 ">
          <Router>
            <Routes>
              <Route path='/' element={ <ToDoList/> } />
              <Route path='/add-to-do' element={ <AddToDo/> } />
              <Route path="/edit/:id" element={ <EditToDo /> } />
            </Routes>
          </Router>
        </div>
      </div>
    </React.StrictMode>
  </Provider>
  );
}

export default App;
