import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-info">
                    <NavLink
                        to="/"
                        exact
                        className="logo"
                        >
                        Новостник
                        <span>Single Page Application</span>
                    </NavLink>    
                    <p className="info-project">
                        Дипломный проект
                    </p>
                    <p className="author-project">
                        <span>
                            Made by
                        </span>
                        Руслан Карауш
                    </p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };