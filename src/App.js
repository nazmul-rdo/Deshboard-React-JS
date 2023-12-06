import { useState } from 'react';
import './App.css';
import SideBar from './layout/SideBar';
import TopMenu from './layout/TopMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Deshboard from './pages/deshboard/index'

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

          <div className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path='/' element={<Deshboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
