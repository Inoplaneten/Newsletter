import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <nav className="navigation">
                    <NavLink
                        to="/"
                        exact
                        className="logo"
                    >
                        Новостник
                    </NavLink>
                    <ul className="menu">
                        <li>
                            <NavLink to={"/"} exact>
                                Главная
                            </NavLink >
                        </li>
                        <li>
                            <NavLink to={"/news"}  exact>
                                Новости
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contacts"}  exact>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export { Header };