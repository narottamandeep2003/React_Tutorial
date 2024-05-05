import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <Link to={"/"}>home</Link>
        <br />
        <Link to={"/about"}>about</Link>
        <br />
        <Link to={"/contact"}>contact</Link>
        <br />
    </div>
  )
}
