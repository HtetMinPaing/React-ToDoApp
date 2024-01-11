import React from 'react';
import { useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import style from '../styles/modules/app.module.scss';

function Content() {
  const todoList = useSelector((state) => state.todo.todoList);

  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => todo.title)
        : 'No'}
    </div>
  );
}

export default Content;
