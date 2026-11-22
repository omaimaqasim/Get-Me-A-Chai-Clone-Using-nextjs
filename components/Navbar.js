import React from 'react'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className='bg-gray-900 flex px-12 py-3 justify-between items-center '>
      <h1 className='font-bold'><Link href="/">GetMeAChai!</Link></h1>

      <div className='flex gap-3 *:transition-all *:duration-150 *:ease-in-out'>
        <button className='bg-blue-600 py-3 px-5 rounded-xl flex items-center justify-center hover:bg-blue-800 cursor-pointer '>
          <FiSearch size={18} />
        </button>
        
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"> <Link href="/login">Login</Link></button>
      </div>
    </nav>
  )
}

export default Navbar
