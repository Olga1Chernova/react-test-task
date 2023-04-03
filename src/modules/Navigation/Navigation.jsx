import { NavLink } from 'react-router-dom';

import items from './items';
import css from './Navigation.module.scss';

const getFullName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : `${css.link}`;
};

const Navigation = () => {
      const elements = items.map(({ id, text, link }) => (
        <li key={id}>
            <NavLink className={getFullName} to={link}>
              {text}
            </NavLink>
        </li>
      ));

    return (
        <div className={css.nav_container}>
                {elements}
        </div>
    )
}
export default Navigation;
