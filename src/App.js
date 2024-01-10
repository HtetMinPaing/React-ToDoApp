import React from 'react';
import Title from './components/Title';
import style from './styles/modules/app.module.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Title>To Do Lists</Title>
      <div className={style.app__wrapper}>
        <Header />
      </div>
    </div>
  );
}

export default App;
