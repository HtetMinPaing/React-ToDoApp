import React from 'react';
import Title from './components/Title';
import style from './styles/modules/app.module.scss';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="container">
      <Title>To Do Lists</Title>
      <div className={style.app__wrapper}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
