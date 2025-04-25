import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='p-3 bg-gray-300'>
        <ul className='flex gap-20 justify-center '>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/GroupedTeamMember'}>Groups</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
