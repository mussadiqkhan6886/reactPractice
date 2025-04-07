import { headerLogo } from '../assets/images'
import { hamburger } from  '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
import SideBar from './SideBar'

const Nav = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  function handleClick(){
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt="logo" width={129} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map(item => (
            <li key={item.label}>
              <a className='font-montserrat leading-normal text-lg text-slate-gray border-b-2 border-transparent hover:border-b-2 hover:border-coral-red pb-1 transition-all duration-300 ease-in-out' href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img className='cursor-pointer' onClick={handleClick} src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
      </nav>

      {isSideBarOpen && <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>}
    </header>
  )
}

export default Nav
