import React from 'react'
// import Logo from '../MovieLogo.jpg'
import { Link } from 'react-router-dom'
import { Clapperboard } from 'lucide-react';

export const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 bg-violet-100/50'>
        {/* <img className='w-[50px] rounded-full border-4 border-gray-500/50' src={Clapperboard} alt="" /> */}
        <Clapperboard className="w-9 h-9 animate-pulse" />

        <Link to="/" className='text-violet-900 text-3xl font-bold font-serif hover:scale-110 duration-300 hover:cursor-pointer '>Movies</Link>
        <Link to="/watchlist" className='text-violet-900 text-3xl font-bold font-serif hover:scale-110 duration-300 hover:cursor-pointer '>WatchList</Link>
    </div>
  )
}
export default NavBar
