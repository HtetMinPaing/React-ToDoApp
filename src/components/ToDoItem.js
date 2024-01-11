import React from 'react';
import style from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

function ToDoItem({ todo }) {
  return (
    <div className={style.item}>
      <div className={style.todoDetails}>
        <div className={style.texts}>
          <p
            className={getClasses([
              style.todoText,
              todo.status === 'complete' && style[`todoText--completed`],
            ])}
          >
            {todo.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
