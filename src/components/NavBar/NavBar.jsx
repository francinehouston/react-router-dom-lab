import {Link} from "react-router-dom"
import React from 'react'

const NavBar= () => {
  return (
    <nav>
        {/* <h1>Mailbox</h1> */}
        <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to="/mailboxes">Mailboxes</Link></li>
        <li><Link to = "/new-mailbox">New Mailbox</Link></li>
        </ul>
        </nav>
  )
}

export default NavBar;