import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { selectTodoList } from './features/todoSlice';


function App() {

  const todoList = useSelector(selectTodoList)
  const dummy = useRef()
  const handler = () => {

  }

  useEffect(() => {
    return () => {
      dummy.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  })

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map(todoItem => (
            <TodoItem name={todoItem.item} done={todoItem.done} key={todoItem.id} id={todoItem.id} />
          ))}
          <div ref={dummy}></div>
        </div>
        <Input onChange={handler} />
      </div>
    </div >
  );
}

export default App;
