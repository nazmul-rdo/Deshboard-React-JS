import React from 'react'

const ProductsList = ({ }) => {
    const products = [
        { id: 1, name: 'Laptop', price: '$999.99', stock: 10, category: 'Electronics' },
        { id: 2, name: 'Phone', price: '$699.99', stock: 15, category: 'Electronics' },
        { id: 3, name: 'Headphones', price: '$149.99', stock: 5, category: 'Electronics' },
        { id: 4, name: 'Smartwatch', price: '$299.99', stock: 8, category: 'Electronics' },
        { id: 5, name: 'Tablet', price: '$499.99', stock: 20, category: 'Electronics' },
        { id: 6, name: 'Shirt', price: '$29.99', stock: 25, category: 'Clothing' },
        { id: 7, name: 'Jeans', price: '$59.99', stock: 12, category: 'Clothing' },
        { id: 8, name: 'Shoes', price: '$89.99', stock: 8, category: 'Clothing' },
        { id: 9, name: 'Watch', price: '$199.99', stock: 18, category: 'Accessories' },
        { id: 10, name: 'Sunglasses', price: '$49.99', stock: 10, category: 'Accessories' },
        { id: 11, name: 'Backpack', price: '$79.99', stock: 15, category: 'Accessories' },
    ];

    return (
        <>
            <div className="p-6 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-6">Product List</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Category</th>
                                <th className="py-3 px-6 text-left">Price</th>
                                <th className="py-3 px-6 text-left">Stock</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {products.map((product) => (
                                <tr key={product.id} className="border-b">
                                    <td className="py-4 px-6">{product.id}</td>
                                    <td className="py-4 px-6">{product.name}</td>
                                    <td className="py-4 px-6">{product.category}</td>
                                    <td className="py-4 px-6">{product.price}</td>
                                    <td className="py-4 px-6">{product.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductsList
