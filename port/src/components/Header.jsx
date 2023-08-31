import React from 'react';
import {  NavLink } from 'react-router-dom';
import './App.css';
function Header() {
  return (
    
    <header>
      <div className= 'Navbar_logo'>
        <img src ="https://www.bing.com/ck/a?!&&p=24e3e05a5b9dad65JmltdHM9MTY5MzM1MzYwMCZpZ3VpZD0zYzYzZDU0Ni05NDIzLTY0MTktMjg3My1jNjI5OTVlNjY1NDImaW5zaWQ9NTQ5Ng&ptn=3&hsh=3&fclid=3c63d546-9423-6419-2873-c62995e66542&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZStmb3IrY29tcHV0ZXIrZG93bmxvYWQmaWQ9MEYwODNENzNCNzU5ODE1NjE5RTEwMzE3NDczNTg4MzQyNUNG
        RTQxOCZGT1JNPUlRRlJCQQ&ntb"/>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

