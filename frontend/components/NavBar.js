import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react';

const NavBar = ({game}) => {
  return (
    <div><header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl">BrainSpark Games</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
        <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
        <Link href="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
      </nav>
      <button className="my-2 text-white bg-indigo-500 border-0 mx-1 py-1 md:py-1 px-2 md:px-2 focus:outline-none hover:bg-indigo-600 rounded text-s"  onClick={() => signOut({ callbackUrl: '/auth/signin' })}>Logout</button>
    </div>
  </header></div>
  )
}

export default NavBar