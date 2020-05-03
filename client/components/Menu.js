import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Ôn tập',
        to: '/',
        exact: true
    },
    {
        name: 'Kiểm tra',
        to: '/test',
        exact: false
    }

];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to} replace>{label}</Link>
                </li>
            )
        }} />
    )
}


class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </div>

        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />

                )
            })
        }

        return result
    }
}

export default Menu;
