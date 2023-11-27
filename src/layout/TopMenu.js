import React, { useState } from 'react'
import user from '../img/user.svg'

import logo from '../img/logo.png'


const TopMenu = ({ tagleSideMenu, handleTagleSideMenu }) => {
    const [menu, setManu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

    return (
        <>
            <div className=" w-full flex flex-row justify-between items-center py-2 md:flex md:flex-row md:items-center md:bg-white md:px-6 md:py-4 md:border-b md:border-gray-300 gap-2">
                {/* mobail menu */}
                <div className=" flex-none w-full flex flex-row items-center px-6 md:hidden">
                    <div className='flex gap-4'>
                        <img src={logo} className="w-10 flex-none" />
                        <strong className="capitalize ml-1 flex-1">cleopatra</strong>
                    </div>

                    <button
                        onClick={handleTagleSideMenu}
                        className="m-auto focus:outline-none"
                    >
                        <i className={`${menu ? 'fad fa-list-ul' : 'fad fa-list-ul'}`}></i>
                    </button>


                    <button 
                    onMouseEnter={()=>setManu(true)} 
                    className={`m-auto right-4 mr-6`}
                    >
                        <i className={`${tagleSideMenu ? 'fad fa-chevron-double-down' : 'fad fa-chevron-double-up'}`}></i>
                    </button>

                    <div className=" flex items-center gap-2 md:hidden relative">
                        <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                            <i className="fad fa-bells"></i>
                        </button>

                        <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                            <i className="fad fa-comments"></i>
                        </button>

                        <button
                        onMouseEnter={() =>setShowDropdown(true)}
                            className="menu-btn focus:outline-none focus:shadow-outline flex items-center">
                            <div className="w-8 h-8 overflow-hidden rounded-full">
                                <img className="w-full h-full object-cover" src={user} alt="User" />
                            </div>

                        </button>
                        {/* Dropdown content */}
                        {showDropdown && (
                            <div  
                            onMouseEnter={() =>setShowDropdown(true)} 
                            
                            onMouseLeave={() =>setShowDropdown(!showDropdown)} 
                            className="absolute top-10 right-0 bg-white border border-gray-200 shadow-md rounded-md p-2 z-10">
                                {/* Dropdown items */}
                                <div className='w-44 min-h-16'>
                                    <div className='flex justify-center flex-col w-full items-center gap-3 py-4'>
                                        <div className="w-16 h-16 overflow-hidden rounded-full">
                                            <img className="w-full h-full object-cover text-center" src={user} alt="User" />
                                        </div>
                                        <div className="ml-2 capitalize flex">
                                            <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none text-center">Md Nazmul Hossain</h1>
                                        </div>
                                    </div>
                                    <hr />
                                    <button className="block w-full py-2 text-center">Profile</button>
                                    <button className="block w-full py-2 text-center">Setting</button>
                                    <button className="block w-full py-2 text-center bg-red-600 text-white rounded">Logout</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {menu && (
                    <div
                    className='w-32 h-8'
                    onMouseEnter={()=>setManu(true)}
                    onMouseOut={()=>setManu(!menu)}
                    >
                    <div
                    
                    className="absolute top-10 right-24 z-10 dropdowntext-gray-600 w-32 min-h-4 gap-4 flex flex-row justify-center items-center md:hidden">
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-envelope-open-text"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-comments-alt"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-check-circle"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-calendar-exclamation"></i></a>
                </div>
                </div>
                )}
                {/* desktop manu */}
                <div className="hidden md:flex-none w-32 md:flex md:flex-row md:items-center">
                    <img src={logo} className="w-10 flex-none" />
                    <strong className="capitalize ml-1 flex-1">cleopatra</strong>

                    <button
                        onClick={handleTagleSideMenu}
                        className="md:hidden ml-auto focus:outline-none"
                    >
                        <i className={`${menu ? 'fad fa-list-ul' : 'fad fa-list-ul'}`}></i>
                    </button>


                    <button onMouseEnter={()=>setManu(true)} id="navbarToggle" className={`md:hidden ml-auto right-0 mr-6`}
                    >
                        <i className={`${menu ? 'fad fa-chevron-double-down' : 'fad fa-chevron-double-up'}`}></i>

                    </button>

                </div>
                <div className="text-gray-600 hidden md:w-full md:flex md:flex-row md:justify-start md:border-gray-200 gap-4">
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-envelope-open-text"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-comments-alt"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-check-circle"></i></a>
                    <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i className="fad fa-calendar-exclamation"></i></a>
                </div>

                {/* Notification and Messages Buttons */}
                <div className="hidden md:flex gap-4">
                    <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                        <i className="fad fa-bells"></i>
                    </button>
                    <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                        <i className="fad fa-comments"></i>
                    </button>
                </div>

                {/* User Dropdown */}
                <div className="hidden md:flex items-center gap-4 relative">
                    <button
                        onMouseEnter={() =>setShowDropdown(true)}  
                        className="menu-btn focus:outline-none focus:shadow-outline flex items-center">
                        <div className="w-8 h-8 overflow-hidden rounded-full">
                            <img className="w-full h-full object-cover" src={user} alt="User" />
                        </div>
                        <div className="ml-2 capitalize flex">
                            <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">Admin</h1>
                            <i className="fad fa-chevron-down ml-2 text-xs leading-none"></i>
                        </div>
                    </button>

                    {showDropdown && (
                        <div
                        
                        onMouseEnter={() =>setShowDropdown(true)}  
                        onMouseLeave={() =>setShowDropdown(!showDropdown)} 
                         className="absolute top-10 right-0 bg-white border border-gray-200 shadow-md rounded-md p-2 z-10">
                            {/* Dropdown items */}
                            <div className='w-44 min-h-16'>
                                <div className='flex justify-center flex-col w-full items-center gap-3 py-4'>
                                    <div className="w-16 h-16 overflow-hidden rounded-full">
                                        <img className="w-full h-full object-cover text-center" src={user} alt="User" />
                                    </div>
                                    <div className="ml-2 capitalize flex">
                                        <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none text-center">Md Nazmul Hossain</h1>
                                    </div>
                                </div>
                                <hr />
                                <button className="block w-full py-2 text-center">Profile</button>
                                <button className="block w-full py-2 text-center">Setting</button>
                                <button className="block w-full py-2 text-center bg-red-600 text-white rounded">Logout</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>


        </>
    )
}

export default TopMenu