import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import style from '../styles/modules/modal.module.scss';
import Button from './Button';
import { addTodo, updateTodo } from '../slices/todoSlice';

function ToDoModal({ modalOpen, setModalOpen, type, todo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success('Successfully added a Task');
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
        } else {
          toast.error('No changes made');
        }
      }
      setModalOpen(false);
    } else {
      toast.error('Please input a title');
    }
  };
  return (
    modalOpen && (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div
            className={style.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
            aria-label="Add"
          >
            <MdOutlineClose />
          </div>
          <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={style.formTitle}>
              {type === 'update' ? 'Update Task' : 'Add Task'}
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">incomplete</option>
                <option value="complete">complete</option>
              </select>
            </label>
            <div className={style.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === 'update' ? 'Update Task' : 'Add Task'}
              </Button>
              <Button
                type="submit"
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default ToDoModal;
