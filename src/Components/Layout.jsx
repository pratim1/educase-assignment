import React from 'react'

function Layout({ children, className = "" }) {
  return (
    <div className="font-rubik min-h-screen bg-white flex flex-col items-center">
    
      <div
        className={`font-rubik container flex flex-col bg-gray-50 border border-gray-200 
        max-w-md w-[375px] gap-6 p-6 h-screen overflow-y-auto ${className}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout

