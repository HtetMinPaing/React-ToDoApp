import React from 'react';
import { format } from 'date-fns/esm';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import style from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteTodo } from '../slices/todoSlice';

function ToDoItem({ todo }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    console.log('Edit');
  };
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
          <p className={style.time}>
            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
          </p>
        </div>
      </div>
      <div className={style.todoActions}>
        <div
          className={style.icon}
          role="button"
          tabIndex={0}
          onClick={handleDelete}
          onKeyDown={handleDelete}
          aria-label="Delete"
        >
          <MdDelete />
        </div>
        <div
          className={style.icon}
          role="button"
          tabIndex={0}
          onClick={handleEdit}
          onKeyDown={handleEdit}
          aria-label="Edit"
        >
          <MdEdit />
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
