import React, { Component } from 'react'
import  {Link, NavLink}  from 'react-router-dom'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]
const Navbar = () => {
    return(
        <nav className="nav-wrapper cyan darken-4" >
            <div className="container">
                <a className="brand-logo">Poke</a>
                <ul className="right">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink to={link.path}>{link.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar