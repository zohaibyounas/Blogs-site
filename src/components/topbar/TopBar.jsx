import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"

export default function TopBar() {
  const users = false;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}> HOME</Link>
          </li>
          <li className='topListItem'>
            <Link to="/post/:postId" style={{ textDecoration: "none", color: "inherit" }}>ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link to="settings" style={{ textDecoration: "none", color: "inherit" }}>CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link to="/write" style={{ textDecoration: "none", color: "inherit" }}>WRITE</Link>
          </li>
          <li className='topListItem'>
            {users && "LOGOUT"}

          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          users ? (
            <img
              className='topImg'
              src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img"
            />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to="/login">Login</Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to="/register">Register</Link>
              </li>
            </ul>
          )
        }

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>

  )
}
