// import React, { Component } from 'react';
import {Link} from "react-router-dom"
const Index = ()=> {  
        return (
            <div>
                <h2> welcome to React Router Tutorial</h2>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <ul className='navbar-nav mr-auto'>
                        <li><Link to={'/Home'} className='nav-link'>Home</Link></li>
                        <li><Link to={'/About'} className='nav-link'>About</Link></li>
                        <li><Link to={'/Contact'} className='nav-link'>Contact</Link></li>
                    </ul>
                </nav>
                <hr/>
            </div>
        );
}

export default Index;