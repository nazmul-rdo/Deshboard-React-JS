import React, { useState } from 'react'

const SideBar = ({tagleSideMenu, handleTagleSideMenu, test}) => {


  return (
    <>
      <div id="sideBar" className={`${tagleSideMenu? "hidden ":" "} md:flex md:flex-col md:min-h-screen ${test? "md:w-32":"md:w-64"} bg-white border-r border-gray-300 p-6 md:sticky md:top-0`}>

        <div class="flex flex-col">

          <div class="text-right md:hidden block mb-4">
            <button onClick={handleTagleSideMenu} id="sideBarHideBtn">
              <i class="fad fa-times-circle"></i>
            </button>
          </div>

          <p class="uppercase text-xs text-gray-600 mb-4 tracking-wider">homes</p>

          <a href="./index.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-chart-pie text-xs mr-2"></i>
            Analytics dashboard
          </a>
          <a href="./index-1.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-shopping-cart text-xs mr-2"></i>
            ecommerce dashboard
          </a>

          <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">apps</p>

          <a href="./email.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-envelope-open-text text-xs mr-2"></i>
            email
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-comments text-xs mr-2"></i>
            chat
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-shield-check text-xs mr-2"></i>
            todo
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-calendar-edit text-xs mr-2"></i>
            calendar
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-file-invoice-dollar text-xs mr-2"></i>
            invoice
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-folder-open text-xs mr-2"></i>
            file manager
          </a>


          <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">UI Elements</p>

          <a href="./typography.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-text text-xs mr-2"></i>
            typography
          </a>
          <a href="./alert.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-whistle text-xs mr-2"></i>
            alerts
          </a>
          <a href="./buttons.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-cricket text-xs mr-2"></i>
            buttons
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-box-open text-xs mr-2"></i>
            Content
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-swatchbook text-xs mr-2"></i>
            colors
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-atom-alt text-xs mr-2"></i>
            icons
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-club text-xs mr-2"></i>
            card
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-cheese-swiss text-xs mr-2"></i>
            Widgets
          </a>
          <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i class="fad fa-computer-classic text-xs mr-2"></i>
            Components
          </a>


        </div>

      </div>

    </>

  )
}

export default SideBar;