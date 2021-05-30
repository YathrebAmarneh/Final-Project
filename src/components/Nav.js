import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = ({className}) => {
    return (
        <div className={className}>
            <div className="container">
                <h4 className="settings">Settings</h4>
                <ul>
                    <li>
                        <NavLink exact to="/">General</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">User</NavLink>
                    </li>
                    <li>
                        <NavLink to="/team">Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/localization">Localization</NavLink>
                    </li>
                    <li>
                        <NavLink to="/excludelists">Exclude Lists</NavLink>
                    </li>
                    <li>
                        <NavLink to="/usagebilling">Usage & Billing</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Nav