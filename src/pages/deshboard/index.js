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
          <RecentOrders />
          </main>
        </section>
      </main>
    </>
  )
}

export default Deshboard

const orders = [
  {
    id: 1,
    orderNumber: 'Order #12345',
    date: 'October 8, 2023',
    status: 'Delivered',
    products: [
      { id: 1, name: 'Laptop', price: '$999.99' },
      { id: 2, name: 'Phone', price: '$699.99' },
      { id: 3, name: 'Headphones', price: '$149.99' },
    ],
  },
  {
    id: 2,
    orderNumber: 'Order #67890',
    date: 'September 15, 2023',
    status: 'Processing',
    products: [
      { id: 4, name: 'Smartwatch', price: '$299.99' },
      { id: 5, name: 'Tablet', price: '$499.99' },
    ],
  },
  {
    id: 3,
    orderNumber: 'Order #13579',
    date: 'August 28, 2023',
    status: 'Delivered',
    products: [
      { id: 6, name: 'Camera', price: '$799.99' },
      { id: 7, name: 'Printer', price: '$199.99' },
      { id: 8, name: 'External Hard Drive', price: '$129.99' },
    ],
  },
  {
    id: 4,
    orderNumber: 'Order #24680',
    date: 'July 5, 2023',
    status: 'Delivered',
    products: [
      { id: 9, name: 'Gaming Console', price: '$499.99' },
      { id: 10, name: 'Controller', price: '$59.99' },
    ],
  },
  {
    id: 5,
    orderNumber: 'Order #98765',
    date: 'June 12, 2023',
    status: 'Processing',
    products: [
      { id: 11, name: 'Fitness Tracker', price: '$149.99' },
      { id: 12, name: 'Wireless Earbuds', price: '$99.99' },
      { id: 13, name: 'Bluetooth Speaker', price: '$79.99' },
    ],
  },
];
const RecentOrders = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow overflow-hidden rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Number</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{order.orderNumber}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <ul className="list-disc list-inside">
                    {order.products.map((product) => (
                      <li key={product.id} className="text-sm text-gray-600 list-none">
                        {product.name}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3">
                  <ul className="list-disc list-inside">
                    {order.products.map((product) => (
                      <li key={product.id} className="text-sm text-gray-600 list-none">
                        {product.price}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};