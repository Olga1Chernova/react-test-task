import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import css from './header.module.scss';

const Header = () => {
  return (
    <div className={css.header}>
      <IconContext.Provider value={{ color: 'rgb(178, 124, 240)' }}>
        <FaShoppingCart />
      </IconContext.Provider>
      <h1 className={css.title}>My Goods</h1>
    </div>
  );
};

export default Header;
