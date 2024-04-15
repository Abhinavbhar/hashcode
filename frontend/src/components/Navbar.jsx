import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import lock from '../assets/lock.svg';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full h-[96px] bg-white shadow-sm'>
      <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
        <img src={logo} alt="" srcset="" className='w-[12%] mt-5' />
        <h2 className='text-2xl mr-80 font-bold'>WI$E</h2>
        <div className="flex items-center">
          <ul className='hidden md:flex gap-4 '>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='md:flex hidden'>
          <button className='flex justify-content-between items-center bg-transparent px-6'> {/* Incorrect className */}
            <img src={lock} alt='lock' />
            Login
          </button>

<Link to={"/signup"}>          <button className='px-8 bg-[#64e764] h-8 ml-10 border-r-10'>SignUp</button>
</Link>        </div>
      </div>

      
         
        
      
    </div>
  );
};

export default Navbar;
