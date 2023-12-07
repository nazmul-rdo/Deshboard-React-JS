import React, { useState } from 'react';

const AddNewProduct = ({}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([
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
]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
      stock,
      category,
    };

    handleAddProduct(newProduct);

    // Reset form fields
    setName('');
    setPrice('');
    setStock('');
    setCategory('');

    console.log(newProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-1 font-medium">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="stock" className="block mb-1 font-medium">Stock</label>
        <input
          type="number"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-1 font-medium">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Product</button>
    </form>
  );
};

export default AddNewProduct;