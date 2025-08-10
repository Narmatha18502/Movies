import React from 'react'
// import Logo from '../MovieLogo.jpg'
import { Link } from 'react-router-dom'
import { Clapperboard } from 'lucide-react';

export const NavBar = () => {
  return (
    <div className='sticky top-0 bg-violet-100/50 backdrop-blur-sm border flex space-x-8 items-center px-3 py-4 z-50 box-border'>
        {/* <img className='w-[50px] rounded-full border-4 border-gray-500/50' src={Clapperboard} alt="" /> */}
        <Clapperboard className="w-9 h-9 animate-pulse" />

        <Link to="/" className='text-violet-900 text-3xl font-bold font-serif hover:scale-110 duration-300 hover:cursor-pointer '>Movies</Link>
        <Link to="/watchlist" className='text-violet-900 text-3xl font-bold font-serif hover:scale-110 duration-300 hover:cursor-pointer '>WatchList</Link>
    </div>
  )
}
export default NavBar
