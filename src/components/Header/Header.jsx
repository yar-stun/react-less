import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src="https://sites.google.com/site/smesarikiclass/_/rsrc/1463455748373/home/kar-karyc/7.png?height=400&width=384"
            alt=""
        />

        <div className={s.loginBlock}>
            {props.isAuth
                ?
                <div className={s.loginValue}>{props.login}</div>
                :
                <NavLink to={'/login'} className={s.loginText}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header