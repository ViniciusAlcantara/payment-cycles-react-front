import React from 'react'
import Navbar from './Navbar'

export default props => (
    <header className='main-header'>
        <a href="/#/" className='logo'>
            <span className="logo-mini"><b>My</b> M</span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> My</b> Money
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a data-toggle="offcanvas" className="sidebar-toggle"></a>
            <Navbar />
        </nav>
    </header>
)