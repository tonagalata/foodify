import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import userService from '../../service/userService'

const Narbar = props => {
  const conditionalUI = userService.getUser() 
  ? 
    <>
      <li>
        <Link to='/restaurants'>Restaurants</Link>
      </li>
      <li>
        <Link to="/" onClick={props.handleLogout}>Logout</Link>
      </li>
    </>
    :
      <>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li> 
      </>

  return(
    <nav className={styles.navbar}>
      <h1>
        <Link to='/'>Foodify</Link>
      </h1>
      <ul>
        { conditionalUI }
      </ul>
    </nav>
  )
}

export default Narbar;