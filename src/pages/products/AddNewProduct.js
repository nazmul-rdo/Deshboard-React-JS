import React, { useState } from 'react';

const AddNewProduct = ({ products, setProducts }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: name,
      price: price,
      stock: stock,
      category: category,
    };

    setProducts([...products, newProduct]);
    // Clear the input fields
    setName('');
    setPrice('');
    setStock(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-1 font-medium">
          Price
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="stock" className="block mb-1 font-medium">
          Stock
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          value={stock}
          onChange={(e) => setStock(parseInt(e.target.value))}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-1 font-medium">
          Category
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddNewProduct;