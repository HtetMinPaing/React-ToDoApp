import React from 'react';
import { useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import style from '../styles/modules/app.module.scss';
import ToDoItem from './ToDoItem';

function Content() {
  const todoList = useSelector((state) => state.todo.todoList);

  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
        : 'No'}
    </div>
  );
}

export default Content;
