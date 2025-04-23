import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='bg-black text-blue-800 flex justify-between p-4'>
      <div>
        <Link to='/'>Movie App </Link>
      </div>
      <div className='flex gap-5'>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </header>
  )
}

export default NavBar
