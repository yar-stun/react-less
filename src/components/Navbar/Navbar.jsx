import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
    <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></div>
    <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
    <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
  </nav>
}

export default Navbar