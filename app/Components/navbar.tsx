'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const path= usePathname();
  return (
    <div className=' h-auto py-6 sticky top-0 z-50 backdrop-blur-sm w-full flex justify-center gap-x-10 font-bold text-yellow-900  items-center bg-green-300/50 bg-opacity-45'>
        <Link href={'/'} className={`hover:scale-110 transition-all duration-300 ${path==='/'? 'text-blue-950 scale-110' : ' scale-100'}`}>Home</Link>
        <Link href={'/hero'} className={`hover:scale-110 transition-all duration-300 ${path==='/hero'? 'text-blue-950 scale-110' : ' scale-100'}`}>Hero</Link>
        <Link href={'/hero/subhero' } className={`hover:scale-110 transition-all duration-300 ${path==='/hero/subhero'? 'text-blue-950 scale-110' : ' scale-100'}`}>About Hero</Link>
        <Link href={'/about'} className={`hover:scale-110 transition-all duration-300 ${path==='/about'? 'text-blue-950 scale-110' : ' scale-100'}`}>About</Link>
    </div>
  )
}

export default Navbar