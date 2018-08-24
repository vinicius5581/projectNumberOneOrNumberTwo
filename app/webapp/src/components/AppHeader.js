import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.scss';

export default class AppHeader extends React.Component {
    render() {
        return (
            <header className="app-header">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/restrooms" activeClassName="selected">
                                Restrooms
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites" activeClassName="selected">
                                Favorites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/history" activeClassName="selected">
                                History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create-restroom" activeClassName="selected">
                                Add a restroom
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" activeClassName="selected">
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
