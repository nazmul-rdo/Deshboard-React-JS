import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SideBar = ({tagleSideMenu, handleTagleSideMenu, test}) => {


  return (
    <>
      <div id="sideBar" className={`${tagleSideMenu? "hidden ":" "} md:flex md:flex-col md:min-h-screen ${test? "md:w-32":"md:w-64"} bg-white border-r border-gray-300 p-6 md:sticky md:top-0`}>

        <div className="flex flex-col">

          <div className="text-right md:hidden block mb-4">
            <button onClick={handleTagleSideMenu} id="sideBarHideBtn">
              <i className="fad fa-times-circle"></i>
            </button>
          </div>

          <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">home</p>

          <Link to="/analytics" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-chart-pie text-xs mr-2"></i>
            Analytics dashboard
          </Link>
          <Link to="/" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-shopping-cart text-xs mr-2"></i>
            ecommerce dashboard
          </Link>

          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">apps</p>

          <a href="./email.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-envelope-open-text text-xs mr-2"></i>
            email
          </a>
          <Link to="/chat" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-comments text-xs mr-2"></i>
            chat
          </Link>
          <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-shield-check text-xs mr-2"></i>
            todo
          </a>
          <Link to="/calendar" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-calendar-edit text-xs mr-2"></i>
            calendar
          </Link>
          <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-file-invoice-dollar text-xs mr-2"></i>
            invoice
          </a>
          <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-folder-open text-xs mr-2"></i>
            file manager
          </a>

          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Products</p>

          <Link to="/products" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-text text-xs mr-2"></i>
            Products List
          </Link>
          <Link to="/addproducts" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-whistle text-xs mr-2"></i>
            Add products
          </Link>

          <Link to="/cat" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
            <i className="fad fa-box-open text-xs mr-2"></i>
            Catagories
          </Link>
        </div>

      </div>

    </>

  )
}

export default SideBar;