import React from 'react';
import Button, { SelectButton } from './Button';
import style from '../styles/modules/app.module.scss';

const Header = () => (
  <div className={style.appHeader}>
    <Button variant="primary" type="button">
      Click Me
    </Button>
    <SelectButton>
      <option value="all">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Complete</option>
    </SelectButton>
  </div>
);

export default Header;
