import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import lock from '../assets/lock.svg';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';
import { Link } from 'react-router-dom';
import './styles.css'; 
import LandingPage from './Landing';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className='w-full h-[96px] bg-white shadow-sm'>
        <div className='p-4 md:max-w-[1080px] max-w-[450px] m-auto w-full h-full flex justify-between items-center'>
          <img src={logo} alt="" srcset="" className='w-[12%] mt-5 rounded-full' />
          <h2 className='text-3xl mr-80 font-bold'>WI$E</h2>
          <div className="flex items-center">
            <ul className='hidden md:flex gap-4 list-unstyled fw-bold fs-5'>
              <li className="text-lg">
                <Link to="/">Home</Link>
              </li>
              <li className="text-lg">About</li>
              <li className="text-lg">Support</li>
              
            </ul>
          </div>
          <div className='md:flex hidden'>
            <button className='flex justify-content-between items-center bg-transparent px-6'>
              <img src={lock} alt='lock' />
              Login
            </button>
            <Link to={"/signup"}>
              <button className='px-8 bg-[#64e764] h-8 ml-10 border-r-10'>SignUp</button>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
