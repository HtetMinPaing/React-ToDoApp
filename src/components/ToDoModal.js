import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import style from '../styles/modules/modal.module.scss';
import Button from './Button';

function ToDoModal({ modalOpen, setModalOpen }) {
  return (
    <div>
      {modalOpen && (
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
            <form className={style.form}>
              <h1 className={style.formTitle}>Add Task</h1>
              <label htmlFor="title">
                Title
                <input type="text" id="title" />
              </label>
              <label htmlFor="status">
                Status
                <select name="status" id="status">
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
      )}
    </div>
  );
}

export default ToDoModal;
