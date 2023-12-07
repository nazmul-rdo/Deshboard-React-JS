import React from 'react'
import AddNewProduct from './AddNewProduct';
import ProductsList from './ProductsList';

const index = () => {
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

   
    return (
        <>
            <AddNewProduct products={products} setProducts={setProducts}/>
            <ProductsList products={products} />

        </>
    )
}

export default index