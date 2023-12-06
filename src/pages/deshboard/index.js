import React from 'react'

const Deshboard = () => {
  return (
    <>

      <main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">

        <div
          class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row"
        >
          <h1 class="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
        </div>

        <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">

          <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
            <div class="flex items-start justify-between">
              <div class="flex flex-col space-y-2">
                <span class="text-gray-400">Total Users</span>
                <span class="text-lg font-semibold">1,00,221</span>
              </div>
              <div class="p-10 bg-gray-200 rounded-md"></div>
            </div>
            <div>
              <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">80%</span>
              <span>from 2010</span>
            </div>
          </div>
          <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
            <div class="flex items-start justify-between">
              <div class="flex flex-col space-y-2">
                <span class="text-gray-400">Total Products</span>
                <span class="text-lg font-semibold">476</span>
              </div>
              <div class="p-10 bg-gray-200 rounded-md"></div>
            </div>
            <div>
              <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
              <span>from 2023</span>
            </div>
          </div>
          <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
            <div class="flex items-start justify-between">
              <div class="flex flex-col space-y-2">
                <span class="text-gray-400">Active Users</span>
                <span class="text-lg font-semibold">34</span>
              </div>
              <div class="p-10 bg-gray-200 rounded-md"></div>
            </div>
            <div>
              <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
              <span>from 2023</span>
            </div>
          </div>
          <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
            <div class="flex items-start justify-between">
              <div class="flex flex-col space-y-2">
                <span class="text-gray-400">Total Seals</span>
                <span class="text-lg font-semibold">100,221</span>
              </div>
              <div class="p-10 bg-gray-200 rounded-md"></div>
            </div>
            <div>
              <span class="inline-block px-2 text-sm text-white bg-green-300 rounded">4%</span>
              <span>from eshop.com</span>
            </div>
          </div>
        </div>


        <section className='pt-8'>
        <div
          class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row"
        >
          <h1 class="text-2xl font-semibold whitespace-nowrap">Recent Orders</h1>
        </div>
        <main>
          
        </main>
        </section>
      </main>
    </>
  )
}

export default Deshboard