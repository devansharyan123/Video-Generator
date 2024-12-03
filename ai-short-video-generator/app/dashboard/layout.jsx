import React from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'


function DashboardLayout({children}) {
  return (
    <div>
        <div className=' hidden md:block h-screen bg-white fixed mt-[70px] w-[65px]'>
            <SideNav />
        </div>
        <div>
            <Header />
            <div className='md:ml-64 p-10'>
                  {children}
            </div>
        
        </div>
        
    </div>
  )
}

export default DashboardLayout