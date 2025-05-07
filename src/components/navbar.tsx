import React from 'react';
import Link from 'next/link';
import { HiOutlineInformationCircle, HiOutlineShoppingBag } from 'react-icons/hi2';
import { FaRegUser } from 'react-icons/fa6';
import { BiHelpCircle } from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";
import TooltipContainer from './ToolTipContainer';

const NavBar = () => {
  return (
    <nav className='mr-4'>
      <ul className="flex gap-6 justify-center sm:justify-end">
        <li>
          <TooltipContainer content="About Us">
            <Link href="/about">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-gray-200 hover:border-gray-300">
                <HiOutlineInformationCircle className="w-5 h-5 shrink-0" />
              </div>
            </Link>
          </TooltipContainer>
        </li>
        <li>
          <TooltipContainer content="Help">
            <Link href="/help">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-gray-200 hover:border-gray-300">
                <BiHelpCircle className="w-5 h-5 shrink-0" />
              </div>
            </Link>
          </TooltipContainer>
        </li>
        <li>
          <TooltipContainer content="Contact Us">
            <Link href="/contactUs">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-gray-200 hover:border-gray-300">
                <RiMailSendLine className="w-5 h-5 shrink-0" />
              </div>
            </Link>
          </TooltipContainer>
        </li>
        <li>
          <TooltipContainer content="Cart">
            <Link href="/cart">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-gray-200 hover:border-gray-300">
                <HiOutlineShoppingBag className="w-5 h-5 shrink-0" />
              </div>
            </Link>
          </TooltipContainer>
        </li>
        <li>
          <TooltipContainer content="Login">
            <Link href="/login">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-gray-200 hover:border-gray-300">
                <FaRegUser className="w-5 h-5 shrink-0" />
              </div>
            </Link>
          </TooltipContainer>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;