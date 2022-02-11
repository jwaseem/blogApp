import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
function navbar() {
  return (
    <div>
    <nav className="header">

        <div className="articles">
            <Link className="link" to="/firstpage">Home</Link>
            <Link className="link" to="/article-list">Articles</Link>
            <Link className="link" to="/">LogOut</Link>
        </div>
    </nav>
</div>
  )
}

export default navbar