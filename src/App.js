import { useState } from 'react';
import './App.css';
import SideBar from './layout/SideBar';
import TopMenu from './layout/TopMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Deshboard from './pages/deshboard/index'
import AnalyticsDeshboard from './pages/analytics/index';
import ProductsList from './pages/products/ProductsList';
import AddNewProduct from './pages/products/AddNewProduct';
import CalendarData from './components/Calendar';

function App() {

  const [tagleSideMenu, setTagleSideMenu] = useState(true);

  const [test, settest] = useState(false);

  const handleTagleSideMenu = () => {
    setTagleSideMenu(!tagleSideMenu)
  }
  const hide = () => {
    settest(!test);
    console.log("hide");
  }
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
              <Route path='/' element={<Deshboard />} />
              <Route path='/analytics' element={<AnalyticsDeshboard />} />
              
              <Route path='/products' element={<ProductsList />} />
              
              <Route path='/addproducts' element={<AddNewProduct />} />
              
              <Route path='/calendar' element={<CalendarData />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;