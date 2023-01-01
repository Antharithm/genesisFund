import { Tb3DCubeSphere } from 'react-icons/tb'

const Header = () => {
  return (
    <header className='flex justify-between items-center
    p-5 bg-white text-gray-500 hover:text-gray-700
    shadow-lg fixed top-0 left-0 right-0'
    >
        <a href='#' className='flex-justify-start items-center text-xl text-black space-x-7'>
            <span>Genesis</span>
            <Tb3DCubeSphere />
        </a>

        <div className='flex space-x-2 justify-center'>
          <button type='button'
          className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-s leading-tight uppercase
          rounded-full shadow-md hover:bg-green-700'
          >
            Connect Wallet
          </button>
        </div>
    </header>
  )
}

export default Header