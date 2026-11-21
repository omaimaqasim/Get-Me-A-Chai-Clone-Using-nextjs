import React from 'react'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className='bg-gray-900 flex px-12 py-4 justify-between '>
      <h1 className='font-bold'><Link href="/">GetMeAChai!</Link></h1>

      <div className='flex gap-2'>
          <FiSearch size={20} />
        <Link href="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
