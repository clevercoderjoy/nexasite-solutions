"use client"
import React from 'react'

const ButtonTop = () => {

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="border-2 border-gray-300 transition-colors duration-300 hover:bg-gray-200 rounded-full px-6 py-2 text-md font-semibold"
      onClick={handleBackToTop}>
      Back to top
    </button>
  )
}

export default ButtonTop