import React from 'react'
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <>
    <nav 
    data-aos="fade-down"
    className='fixed top-0 right-0 w-full z-50 bg-back/10 backdrop-blur-sm
    py-4'>
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-white font-bold text-2xl">
                    <img src={Logo} alt="Logo" className='w-10'/>
                    <span>MENA-SPACE</span>
                </div>
                <div className='text-white hidden md:block'>
                  <ul className='flex items-center gap-6 text-xl py-4 sm:py-0'>
                    <li className=""><a href="#">About</a></li>
                    <li className=""><a href="#">Technology</a></li>
                    <li className=""><a href="#">Galaxy</a></li>
                    <li className=""><a href="#">Satelite</a></li>
                  </ul>
                </div>
                <div>
                  <button className='text-white border-2 broder-white px-3 py-1 
                  rounded-md'>
                    Login
                  </button>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar