import React, { useEffect, useState } from 'react';
import { format } from 'date-fns/esm';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import style from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import ToDoModal from './ToDoModal';
import CheckButton from './CheckButton';

function ToDoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModal, setUpdateModal] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setUpdateModal(true);
  };

  const handleCheck = () => {
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? 'incomplete' : 'complete',
      })
    );
    setChecked(!checked);
  };

  return (
    <div className={style.item}>
      <div className={style.todoDetails}>
        <CheckButton checked={checked} handleCheck={handleCheck} />
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
      <ToDoModal
        type="update"
        modalOpen={updateModal}
        setModalOpen={setUpdateModal}
        todo={todo}
      />
    </div>
  );
}

export default ToDoItem;
