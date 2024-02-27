import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const navLinkStyles = ({isActive}) => {
    return {
      textcolor: isActive ? 'text-red-600': 'black'
    }
  }
  return (
    <nav>
      <ul className='flex justify-between space-x-1 h-32 px-24'>
        <li>
          <p className='w-36 h-16 top-9 left-20 text-7xl font-bold p-4 font-sans'>ps<span className='text-red-600'>a</span></p>
          </li>
        <div className='flex space-x-1 items-center'>
          <li>
            <NavLink to="/exhibition" style={navLinkStyles} className='w-56 h-7 top-16 left-96 font-sans font-semibold size-9 leading-6 text-2xl p-16 text-red-600 hover:text-red-600 active:text-red-600'>EXHIBITION</NavLink>
          </li>
          <li>
            <NavLink to ="/reservation" style={navLinkStyles} className='w-56 h-7 top-16 left-96 font-sans font-semibold size-9 leading-6 text-2xl p-16 hover:text-red-600 active:text-red-600'>RESERVATION</NavLink>
            </li>
          <li>
            <NavLink to="/location" style={navLinkStyles} className='w-56 h-7 top-16 left-96 font-sans font-semibold size-9 leading-6 text-2xl p-16 hover:text-red-600 active:text-red-600'>LOCATION</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  )
}

