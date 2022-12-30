import React from 'react'
import { Tb3DCubeSphere } from 'react-icons/tb'

const Header = () => {
  return (
    <header className='flex justify-between items-center
    p-5 bg-white text-gray-500 hover:text-gray-700
    shadow-lg fixed top-0 left-0 right-0'
    >
        <a href='#'>
            <span>GenesisFund</span>
            <Tb3DCubeSphere />
        </a>
    </header>
  )
}

export default Header