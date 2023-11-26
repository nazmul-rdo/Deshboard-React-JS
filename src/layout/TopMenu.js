import React, { useState } from 'react'
import user from '../img/user.svg'

import logo from '../img/logo.png'


const TopMenu = ({ tagleSideMenu, handleTagleSideMenu }) => {
    const [menu, setManu] = useState(true);

    const clickbutton = () => {
        setManu(!menu);
        console.log(menu)
    }


    return (
        <>
            <div class="md:flex md:flex-row md:items-center md:bg-white md:px-6 md:py-4 md:border-b md:border-gray-300 gap-2">

                <div class="flex-none w-56 flex flex-row items-center">
                    <img src={logo} class="w-10 flex-none" />
                    <strong class="capitalize ml-1 flex-1">cleopatra</strong>

                    <button
                        onClick={handleTagleSideMenu}
                        className="md:hidden ml-auto focus:outline-none"
                    >
                        <i className={`${!menu ? 'fad fa-list-ul' : 'fad fa-chevron-double-up'}`}></i>
                    </button>


                    <button onClick={clickbutton} id="navbarToggle" className={`md:hidden ml-auto right-0 mr-6`}
                    >
                    <i className={`${tagleSideMenu ? 'fad fa-chevron-double-down' : 'fad fa-chevron-double-up'}`}></i>
                       
                    </button>

                    {/* <div id="navbar" className={`animated md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center ${menu ? " hidden" : " "}`}>
                    <div class="text-gray-600 md:w-full md:flex md:flex-row md:justify-evenly md:pb-10 md:mb-10 md:border-b md:border-gray-200">
                        <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-envelope-open-text"></i></a>
                        <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-comments-alt"></i></a>
                        <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-check-circle"></i></a>
                        <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-calendar-exclamation"></i></a>
                    </div>
                    <div class="flex flex-row-reverse items-center">

                        <div class="dropdown relative md:static">

                            <button class="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center">
                                <div class="w-8 h-8 overflow-hidden rounded-full">
                                    <img class="w-full h-full object-cover" src="img/user.svg" />
                                </div>

                                <div class="ml-2 capitalize flex ">
                                    <h1 class="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">moeSaid</h1>
                                    <i class="fad fa-chevron-down ml-2 text-xs leading-none"></i>
                                </div>
                            </button>

                            <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

                            <div class="text-gray-500 menu hidden md:mt-10 md:w-full rounded bg-white shadow-md absolute z-20 right-0 w-40 mt-5 py-2 animated faster">

                                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                    <i class="fad fa-user-edit text-xs mr-1"></i>
                                    edit my profile
                                </a>
                                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                    <i class="fad fa-inbox-in text-xs mr-1"></i>
                                    my inbox
                                </a>
                                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                    <i class="fad fa-badge-check text-xs mr-1"></i>
                                    tasks
                                </a>
                                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                    <i class="fad fa-comment-alt-dots text-xs mr-1"></i>
                                    chats
                                </a>

                                <hr />

                                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                                    <i class="fad fa-user-times text-xs mr-1"></i>
                                    log out
                                </a>

                            </div>
                        </div>
                        <div class="dropdown relative mr-5 md:static">

                            <button class="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                                <i class="fad fa-bells"></i>
                            </button>

                            <button class="md:hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

                            <div class="menu md:hidden rounded bg-white md:right-0 md:w-full shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                                <div class="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                                    <h1>notifications</h1>
                                    <div class="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                                        <strong>5</strong>
                                    </div>
                                </div>
                                <hr />

                                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                    <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                                        <i class="fad fa-alarm-exclamation text-sm"></i>
                                    </div>

                                    <div class="flex-1 flex flex-rowbg-green-100">
                                        <div class="flex-1">
                                            <h1 class="text-sm font-semibold">time is up..</h1>
                                            <p class="text-xs text-gray-500">text here also</p>
                                        </div>
                                        <div class="text-right text-xs text-gray-500">
                                            <p>1 min ago</p>
                                        </div>
                                    </div>

                                </a>
                                <hr />
                                <div class="px-4 py-2 mt-2">
                                    <a href="#" class="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                                        view all
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown relative mr-5 md:static">

                            <button class="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                                <i class="fad fa-comments"></i>
                            </button>

                            <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

                            <div class="menu hidden md:w-full md:right-0 rounded bg-white shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                                <div class="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                                    <h1>messages</h1>
                                    <div class="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                                        <strong>3</strong>
                                    </div>
                                </div>
                                <hr />
                                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                    <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                                        <img class="w-full h-full object-cover" src="img/user1.jpg" alt="" />
                                    </div>

                                    <div class="flex-1 flex flex-rowbg-green-100">
                                        <div class="flex-1">
                                            <h1 class="text-sm font-semibold">mohamed said</h1>
                                            <p class="text-xs text-gray-500">yeah i know</p>
                                        </div>
                                        <div class="text-right text-xs text-gray-500">
                                            <p>4 min ago</p>
                                        </div>
                                    </div>

                                </a>
                                <hr />
                                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                                    <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                                        <img class="w-full h-full object-cover" src="img/user2.jpg" alt="" />
                                    </div>

                                    <div class="flex-1 flex flex-rowbg-green-100">
                                        <div class="flex-1">
                                            <h1 class="text-sm font-semibold">sull goldmen</h1>
                                            <p class="text-xs text-gray-500">for sure</p>
                                        </div>
                                        <div class="text-right text-xs text-gray-500">
                                            <p>1 day ago</p>
                                        </div>
                                    </div>

                                </a>


                                <hr />
                                <div class="px-4 py-2 mt-2">
                                    <a href="#" class="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                                        view all
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div> */}
                </div>
                <div class="text-gray-600 hidden md:w-full md:flex md:flex-row md:justify-start md:border-gray-200 gap-2">
                    <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-envelope-open-text"></i></a>
                    <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-comments-alt"></i></a>
                    <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-check-circle"></i></a>
                    <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-calendar-exclamation"></i></a>
                </div>

                {/* Notification and Messages Buttons */}
                <div className="hidden md:flex gap-2">
                    <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                        <i className="fad fa-bells"></i>
                    </button>
                    <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                        <i className="fad fa-comments"></i>
                    </button>
                </div>

                {/* User Dropdown */}
                <div className="hidden md:flex items-center gap-2">
                    <button className="menu-btn focus:outline-none focus:shadow-outline flex items-center">
                        <div className="w-8 h-8 overflow-hidden rounded-full">
                            <img className="w-full h-full object-cover" src={user} alt="User" />
                        </div>
                        <div className="ml-2 capitalize flex">
                            <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">moeSaid</h1>
                            <i className="fad fa-chevron-down ml-2 text-xs leading-none"></i>
                        </div>
                    </button>

                </div>
            </div>


        </>
    )
}

export default TopMenu