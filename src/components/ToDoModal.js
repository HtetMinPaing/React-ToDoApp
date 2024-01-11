import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import style from '../styles/modules/modal.module.scss';
import Button from './Button';
import { addTodo } from '../slices/todoSlice';

function ToDoModal({ modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        })
      );
      toast.success('Successfully added a Task');
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
            <h1 className={style.formTitle}>Add Task</h1>
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
                Add Task
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
