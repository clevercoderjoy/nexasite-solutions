import React from 'react';
import NavBar from './navbar';
import SidebarContent from './sidebarContent';

const Header = () => {
  return (
    <>
      <div className="fixed top-4 left-4 z-50 w-[2rem]">
        <SidebarContent />
      </div>

      <header className="bg-gray-100 py-4 fixed top-0 left-0 right-0 z-40">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between">

          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-black text-center">
            bagstore
          </h1>

          <div className="mt-12 md:mt-0 w-full flex justify-center md:justify-end">
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
