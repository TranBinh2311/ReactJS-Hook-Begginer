import React from 'react'
import '../view/Nav.scss'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <div className= "topnav">
            <ul>
                <li><NavLink  activeClassName="active1" to="home" exact>Home</NavLink ></li>
                <li><NavLink  activeClassName="active1" to = "user">News</NavLink ></li>
                <li><NavLink activeClassName="active1" to="about">Contact</NavLink ></li>
                <li><NavLink  activeClassName="active1" to="todos">Todo</NavLink ></li>
            </ul>
        </div>
    )
}

export default Nav
