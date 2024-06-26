import React from 'react'
import './header-component.css'
import LinkList from './header-links'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'

// importing the picture
import brand from '../images/header-pic.png'

function HeaderComponent() {
  return (
    <div className='header-container'>
      <div className="partition-one-logo-section">
        <span className="brand-name">
          Courier<br/>Mate
        </span>
      </div>
      <div className="partition-one-link-section">
        {
          LinkList.map((singleLink , index) => {
            const { icon, link, text } = singleLink

            return (
              <div key={index} className="link-item-container">
                <Link to={link} className='mods-links'>
                  <span className="icon">{icon}</span>
                  <span className="link-text">{text}</span>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div className="button-section">
        <button className="login-button">Login</button>
        <button className="signup-button">Signup</button>
      </div>
    </div>
  )
}

export default HeaderComponent
