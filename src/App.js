import { useState } from 'react';
import './App.css';
import SideBar from './layout/SideBar';
import TopMenu from './layout/TopMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Deshboard from './pages/deshboard/index'
import AnalyticsDeshboard from './pages/analytics/index';
import CalendarData from './components/Calendar';

import AddNewProduct from './pages/products/AddNewProduct';
import ProductsList from './pages/products/ProductsList';
import LiveChat from './pages/chat/index';

function App() {

  const [tagleSideMenu, setTagleSideMenu] = useState(true);

  // const [test, settest] = useState(false);

  const handleTagleSideMenu = () => {
    setTagleSideMenu(!tagleSideMenu)
  }
  // const hide = () => {
  //   settest(!test);
  //   console.log("hide");
  // }

  //add product and add new product
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '999.99', stock: 10, category: 'Electronics' },
    { id: 2, name: 'Phone', price: '699.99', stock: 15, category: 'Electronics' },
    { id: 3, name: 'Headphones', price: '149.99', stock: 5, category: 'Electronics' },
    { id: 4, name: 'Smartwatch', price: '299.99', stock: 8, category: 'Electronics' },
    { id: 5, name: 'Tablet', price: '499.99', stock: 20, category: 'Electronics' },
    { id: 6, name: 'Shirt', price: '29.99', stock: 25, category: 'Clothing' },
    { id: 7, name: 'Jeans', price: '59.99', stock: 12, category: 'Clothing' },
    { id: 8, name: 'Shoes', price: '89.99', stock: 8, category: 'Clothing' },
    { id: 9, name: 'Watch', price: '199.99', stock: 18, category: 'Accessories' },
    { id: 10, name: 'Sunglasses', price: '49.99', stock: 10, category: 'Accessories' },
    { id: 11, name: 'Backpack', price: '79.99', stock: 15, category: 'Accessories' },
    { id: 12, name: 'Backpack', price: '79.99', stock: 15, category: 'Accessories' },
  ]);
  return (
    <BrowserRouter>

      <div className="flex flex-col h-screen md:flex-row md:h-screen">
        <div className={`${test ? "md:w-32" : "md:w-64"}  flex-shrink-0`}>

          <SideBar test={test} tagleSideMenu={tagleSideMenu} setTagleSideMenu={setTagleSideMenu} handleTagleSideMenu={handleTagleSideMenu} />
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <TopMenu tagleSideMenu={tagleSideMenu} setTagleSideMenu={setTagleSideMenu} handleTagleSideMenu={handleTagleSideMenu} />

          <div className="flex-1 p-4 max-h-full overflow-hidden overflow-y-scroll">
            <Routes>
              <Route path='/' element={<Deshboard products={products}/>} />
              <Route path='/analytics' element={<AnalyticsDeshboard />} />
              
              {/* <Route path='/analytics' element={<Chart />} /> */}
              
              <Route path='/products' element={<ProductsList products={products} />} />
              
              <Route path='/addproducts' element={<AddNewProduct products={products} setProducts={setProducts} />} />
              
              <Route path='/calendar' element={<CalendarData />} />
              
              <Route path='/chat' element={<LiveChat />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;